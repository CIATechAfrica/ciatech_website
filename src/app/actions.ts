"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { Resend } from "resend";
import { applicationReceivedEmail, contactReceivedEmail, newsletterWelcomeEmail, adminNotificationEmail } from "@/lib/emailTemplates";

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

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      _type: "contactSubmission",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      status: "unread",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 1. Save to Sanity
    await writeClient.create(data);
    
    // 2. Send Emails
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
        console.error("Failed to send auto-reply to user. In testing mode, this fails if they enter an unverified email.", e);
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
    const data = {
      _type: "applicationSubmission",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      roleAppliedFor: (formData.get("role") as string) || "General",
      portfolioUrl: (formData.get("portfolio") as string) || "",
      coverLetter: (formData.get("coverLetter") as string) || "",
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 1. Save to Sanity
    await writeClient.create(data);
    
    // 2. Send Emails
    if (process.env.RESEND_API_KEY) {
      // Send auto-reply to user
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

      // Send notification to admin
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
    const data = {
      _type: "newsletterSubscriber",
      email: formData.get("email") as string,
      status: "active",
      subscribedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    // 1. Save to Sanity
    await writeClient.create(data);
    
    // 2. Send Email
    if (process.env.RESEND_API_KEY) {
      // Send welcome to user
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

      // Optional: notify admin
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
