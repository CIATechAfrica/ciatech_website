"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/blocks/Header";
import Footer from "@/components/blocks/Footer";

export default function LayoutWrapper({ children, navLinks, primaryCTA, footerData }: any) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');

  // If we are on the Sanity Studio route, render nothing but the studio (no headers, no padding)
  if (isStudio) {
    return <>{children}</>;
  }

  // Otherwise, render the normal website layout
  return (
    <div className="min-h-full flex flex-col font-sans">
      <Header navLinks={navLinks} primaryCTA={primaryCTA} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer data={footerData} />
    </div>
  );
}
