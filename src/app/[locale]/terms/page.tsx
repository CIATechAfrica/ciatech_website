import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | CIATECH Africa",
  description: "The terms, conditions, and intellectual property agreements governing CIATECH Africa platforms.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans selection:bg-secondary/30 selection:text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-500 font-light mb-16 border-b border-gray-200 pb-16">
          Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} <br />
          Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="text-lg text-gray-600 leading-relaxed [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-gray-900 [&>h2]:tracking-tight [&>h2]:mt-14 [&>h2]:mb-6 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-8 [&_strong]:text-gray-900 [&_a]:text-primary [&_a]:font-bold hover:[&_a]:text-secondary">
          
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>CIATECH Africa</strong> ("we," "us," or "our"), concerning your access to and use of our website, our ecosystem programs, and our physical innovation hubs headquartered in Maiduguri, Borno State, Nigeria.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          <p>
            <strong>Startup Incubation IP:</strong> Any intellectual property created by startups or individuals utilizing our physical innovation hubs remains the sole property of the creators, unless explicitly governed by a separate legally binding Equity or Accelerator agreement signed jointly with CIATECH Africa.
          </p>

          <h2>3. User Representations</h2>
          <p>By using the Site, participating in the Partnership Portal, or applying for our initiatives, you represent and warrant that:</p>
          <ul>
            <li>All registration and proposal information you submit will be true, accurate, current, and complete.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not access the Site through automated or non-human means unless formally permitted by our open API policies.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>

          <h2>4. Prohibited Activities</h2>
          <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us (such as formal partnership deployments or SME market system integrations).
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site or our programs.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of the Federal Republic of Nigeria. CIATECH Africa and yourself irrevocably consent that the courts of Nigeria shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <p>
            <strong>CIATECH Africa HQ</strong><br />
            Borno Innovation Hub<br />
            Maiduguri, Borno State, Nigeria<br />
            Email: <a href="mailto:contact@ciatech.africa">contact@ciatech.africa</a>
          </p>

        </div>
      </div>
    </main>
  );
}
