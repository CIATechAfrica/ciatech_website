export const baseTemplate = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #111827; margin: 0; padding: 40px 20px; }
    .container { max-w: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { color: #E2AD00; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; }
    .content { line-height: 1.6; font-size: 16px; color: #374151; }
    .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #6b7280; }
    .btn { display: inline-block; background-color: #8e5516; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">CIATECH</div>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} CIATECH Africa. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const applicationReceivedEmail = (name: string, role: string) => baseTemplate(`
  <h2 style="color: #111827; margin-top: 0;">Application Received</h2>
  <p>Hi ${name},</p>
  <p>Thank you for submitting your application for the <strong>${role}</strong> opportunity at CIATECH.</p>
  <p>Our talent acquisition team has successfully received your profile and will be reviewing it shortly. We appreciate your interest in joining our mission to advance technology across Africa.</p>
  <p>If your background matches our current requirements, we will reach out to you regarding the next steps.</p>
  <br/>
  <p>Best regards,<br/><strong>The CIATECH Team</strong></p>
`);

export const contactReceivedEmail = (name: string) => baseTemplate(`
  <h2 style="color: #111827; margin-top: 0;">We've received your message</h2>
  <p>Hi ${name},</p>
  <p>Thank you for reaching out to CIATECH.</p>
  <p>We have successfully received your inquiry and our team will review it. We typically respond within 1-2 business days depending on the nature of the request.</p>
  <br/>
  <p>Best regards,<br/><strong>The CIATECH Team</strong></p>
`);

export const newsletterWelcomeEmail = () => baseTemplate(`
  <h2 style="color: #111827; margin-top: 0;">Welcome to CIATECH Updates</h2>
  <p>Thank you for subscribing to our newsletter!</p>
  <p>You are now on the list to receive the latest ecosystem mapping, policy briefs, and innovation insights straight to your inbox.</p>
  <br/>
  <p>Best regards,<br/><strong>The CIATECH Team</strong></p>
`);

export const adminNotificationEmail = (type: string, details: string) => baseTemplate(`
  <h2 style="color: #111827; margin-top: 0;">New ${type} Submission</h2>
  <p>A new submission has been recorded in the system.</p>
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; font-family: monospace; font-size: 14px; margin-top: 20px;">
    ${details}
  </div>
  <p style="margin-top: 30px;">
    <a href="https://manage.sanity.io" class="btn">View in Sanity Studio</a>
  </p>
`);
