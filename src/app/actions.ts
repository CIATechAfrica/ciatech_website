"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { Resend } from "resend";
import { z } from "zod";
import { applicationReceivedEmail, contactReceivedEmail, newsletterWelcomeEmail, adminNotificationEmail } from "@/lib/emailTemplates";

async function verifyTurnstileToken(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("Missing TURNSTILE_SECRET_KEY. Skipping verification.");
    return true;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for writes
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");

// The default "from" address. In production, this MUST be a verified domain on your Resend account.
const FROM_EMAIL = "CIATECH <noreply@ciatech.org>";
const ADMIN_EMAIL = "admin@ciatech.org";

// --- VALIDATION SCHEMAS ---
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
  "cf-turnstile-response": z.string().min(1, "Please complete the anti-spam challenge."),
});

const applicationSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  role: z.string().min(2, "Role is required"),
  portfolio: z.union([z.literal(""), z.string().url("Invalid URL").optional()]),
  coverLetter: z.string().optional(),
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});


export async function submitContactForm(formData: FormData) {
  try {
    // 1. Validate Input
    const parsed = contactSchema.safeParse({
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      company: formData.get("company") || "",
      subject: formData.get("subject") || "",
      message: formData.get("message") || "",
      "cf-turnstile-response": formData.get("cf-turnstile-response") || "",
    });

    if (!parsed.success) {
      return { success: false, error: parsed.error.issues[0].message };
    }

    const validData = parsed.data;

    const isHuman = await verifyTurnstileToken(validData["cf-turnstile-response"]);
    if (!isHuman) {
      return { success: false, error: "Security check failed. Please refresh and try again." };
    }

    const data = {
      _type: "contactSubmission",
      name: validData.name,
      email: validData.email,
      company: validData.company || "",
      subject: validData.subject,
      message: validData.message,
      status: "unread",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 2. Save to Sanity
    await writeClient.create(data);
    
    // 3. Send Emails
    if (process.env.RESEND_API_KEY) {
      // Send auto-reply to user
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: "We've received your message - CIATECH",
          html: contactReceivedEmail(data.name),
        });
      } catch (e) {
        console.error("Failed to send auto-reply to user.", e);
      }

      // Send notification to admin
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ADMIN_EMAIL,
          subject: `New Contact Inquiry: ${data.subject}`,
          html: adminNotificationEmail("Contact Inquiry", `Name: ${data.name}<br/>Email: ${data.email}<br/>Company: ${data.company}<br/>Message: ${data.message}`),
        });
      } catch (e) {
        console.error("Failed to send admin notification email.", e);
      }
    }
    
    return { success: true };
  } catch (error: any) {
    console.error("Submit contact form error:", error);
    return { success: false, error: error.message || "Failed to submit form" };
  }
}

export async function submitApplication(formData: FormData) {
  try {
    // 1. Validate Input
    const parsed = applicationSchema.safeParse({
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      role: formData.get("role") || "",
      portfolio: formData.get("portfolio") || "",
      coverLetter: formData.get("coverLetter") || "",
    });

    if (!parsed.success) {
      return { success: false, error: parsed.error.issues[0].message };
    }

    const validData = parsed.data;

    const data = {
      _type: "applicationSubmission",
      name: validData.name,
      email: validData.email,
      phone: validData.phone || "",
      roleAppliedFor: validData.role || "General",
      portfolioUrl: validData.portfolio || "",
      coverLetter: validData.coverLetter || "",
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 2. Save to Sanity
    await writeClient.create(data);
    
    // 3. Send Emails
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: "Application Received - CIATECH",
          html: applicationReceivedEmail(data.name, data.roleAppliedFor),
        });
      } catch (e) {
        console.error("Failed to send auto-reply to user.", e);
      }

      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ADMIN_EMAIL,
          subject: `New Application: ${data.roleAppliedFor}`,
          html: adminNotificationEmail("Application", `Name: ${data.name}<br/>Email: ${data.email}<br/>Role: ${data.roleAppliedFor}<br/>LinkedIn: ${data.portfolioUrl}`),
        });
      } catch (e) {
         console.error("Failed to send admin notification email.", e);
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error("Submit application error:", error);
    return { success: false, error: error.message || "Failed to submit application" };
  }
}

export async function submitNewsletter(formData: FormData) {
  try {
    // 1. Validate Input
    const parsed = newsletterSchema.safeParse({
      email: formData.get("email") || "",
    });

    if (!parsed.success) {
      return { success: false, error: parsed.error.issues[0].message };
    }

    const validData = parsed.data;

    const data = {
      _type: "newsletterSubscriber",
      email: validData.email,
      status: "active",
      subscribedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 2. Save to Sanity
    await writeClient.create(data);
    
    // 3. Send Email
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: "Welcome to CIATECH Updates",
          html: newsletterWelcomeEmail(),
        });
      } catch(e) {
        console.error("Failed to send welcome email.", e);
      }

      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: ADMIN_EMAIL,
          subject: `New Newsletter Subscriber`,
          html: adminNotificationEmail("Newsletter Sign-up", `Email: ${data.email}`),
        });
      } catch(e) {
        console.error("Failed to send admin notification email.", e);
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error("Submit newsletter error:", error);
    return { success: false, error: error.message || "Failed to subscribe" };
  }
}
