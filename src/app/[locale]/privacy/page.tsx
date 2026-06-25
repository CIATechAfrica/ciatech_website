import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CIATECH Africa",
  description: "Learn how CIATECH Africa handles your data, respects your privacy, and secures your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans selection:bg-secondary/30 selection:text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-500 font-light mb-16 border-b border-gray-200 pb-16">
          Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} <br />
          Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="text-lg text-gray-600 leading-relaxed [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-gray-900 [&>h2]:tracking-tight [&>h2]:mt-14 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-8 [&_strong]:text-gray-900 [&_a]:text-primary [&_a]:font-bold hover:[&_a]:text-secondary">

          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>CIATECH Africa</strong> ("we", "our", or "us"). As a premier innovation hub and social enterprise headquartered in Maiduguri, Borno State, Nigeria, we are entirely committed to protecting your privacy and ensuring the security of your personal data.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, utilize our Partnership Portal, or apply for our incubation and workforce development programs.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways when you interact with our digital and physical infrastructure. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, professional email address, telephone number, and organization entity that you voluntarily give to us when choosing to participate in various activities related to our ecosystem (such as deploying a proposal).</li>
            <li><strong>Application Data:</strong> Data submitted during applications for the Women in Business Program, STEM Champ Initiative, or Startup Incubation—which may encompass educational history, business metrics, and financial proposals.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul>
            <li>Process partnership proposals and route inquiries to the appropriate internal departments (e.g., Government Policy, Capital Investments).</li>
            <li>Evaluate applications for our incubation and venture development systems.</li>
            <li>Send you our newsletter, policy briefs, and innovation insights (only if you have explicitly subscribed).</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Increase the efficiency and operation of our digital platforms.</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our multilateral partners, trusted affiliates, and advertisers.</p>

          <h2>5. Data Security</h2>
          <p>
            CIATECH Africa implements administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact our Headquarters at:
          </p>
          <p>
            <strong>CIATECH Africa</strong><br />
            Borno Innovation Hub<br />
            Maiduguri, Borno State, Nigeria<br />
            Email: <a href="mailto:contact@ciatech.africa">contact@ciatech.africa</a><br />
            Phone: +234 800 CIATECH
          </p>

        </div>
      </div>
    </main>
  );
}
