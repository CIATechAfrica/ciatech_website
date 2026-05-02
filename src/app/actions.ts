"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for writes
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      _type: "contactSubmission",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || "",
      subject: formData.get("subject"),
      message: formData.get("message"),
      status: "unread",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    await writeClient.create(data);
    
    // TODO: Phase 4: Implement Resend logic here
    
    return { success: true };
  } catch (error: any) {
    console.error("Submit contact form error:", error);
    return { success: false, error: error.message || "Failed to submit form" };
  }
}

export async function submitApplication(formData: FormData) {
  try {
    // Note: If you add file uploads for resume, they must be uploaded to Sanity as assets first.
    // For now, we are saving text data.
    const data = {
      _type: "applicationSubmission",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      roleAppliedFor: formData.get("role") || "General",
      portfolioUrl: formData.get("portfolio") || "",
      coverLetter: formData.get("coverLetter") || "",
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    await writeClient.create(data);
    
    // TODO: Phase 4: Implement Resend logic here

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
      email: formData.get("email"),
      status: "active",
      subscribedAt: new Date().toISOString(),
    };

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn("Missing SANITY_API_WRITE_TOKEN. Would have saved:", data);
      return { success: false, error: "Sanity write token is missing from environment variables." };
    }

    await writeClient.create(data);
    
    // TODO: Phase 4: Implement Resend logic here

    return { success: true };
  } catch (error: any) {
    console.error("Submit newsletter error:", error);
    return { success: false, error: error.message || "Failed to subscribe" };
  }
}
