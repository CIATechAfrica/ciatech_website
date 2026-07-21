import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homeData } from "../../../../content/home";
import ContactUsSection from "@/components/blocks/ContactUsSection";
import HeroBanner from "@/components/blocks/HeroBanner";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Locations | CIATECH Africa",
  description: "Find CIATECH Africa offices across the continent.",
};

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  let sanityData = null;
  try {
    sanityData = await client.fetch(`*[_type == "contactInformation" && language == "${locale}"][0]`);
  } catch (error) {
    console.warn("Sanity fetch skipped due to network timeout.");
  }
  const contactTeaser = {
    ...homeData.contactTeaser,
    heading: sanityData?.heading || "Our Locations",
    description: sanityData?.description || "Find an office near you.",
    globalHeadquarters: sanityData?.globalHeadquarters,
    subOffices: sanityData?.subOffices,
  };

  const heroData = {
    title: "Global Reach",
    description: "Connect with our offices across Africa and beyond.",
    imageRef: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    ctas: []
  };

  return (
    <main className="pt-24 bg-white min-h-screen">
      <HeroBanner data={heroData} />
      <ContactUsSection data={contactTeaser} />
    </main>
  );
}
