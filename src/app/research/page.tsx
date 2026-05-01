import { researchData } from "../../../content/research";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import ResearchClientWrapper from "./ResearchClientWrapper";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "researchPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || researchData.seo.title,
      description: seoData?.seoDescription || researchData.seo.description,
    };
  } catch (error) {
    return {
      title: researchData.seo.title,
      description: researchData.seo.description,
    };
  }
}

async function getSanityResearchData() {
  try {
    const data = await client.fetch(`{
      "researchPage": *[_type == "researchPage"][0],
      "featuredPublication": *[_type == "researchPublication" && isFeatured == true][0],
      "publications": *[_type == "researchPublication" && isFeatured != true] | order(_createdAt asc)
    }`);
    return data;
  } catch (err) {
    console.error("Failed to fetch Research Data:", err);
    return null;
  }
}

export default async function ResearchPage() {
  const sanityData = await getSanityResearchData();

  const data = {
    ...researchData,
    hero: {
      ...researchData.hero,
      heading: sanityData?.researchPage?.heroHeading || researchData.hero.heading,
      subtext: sanityData?.researchPage?.heroSubtext || researchData.hero.subtext,
    },
    publicationsTitle: sanityData?.researchPage?.publicationsTitle || researchData.publicationsTitle,
  };

  const featured = sanityData?.featuredPublication || researchData.featured;
  const publications = sanityData?.publications?.length > 0 ? sanityData.publications : researchData.publications;

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image 
            src={data.hero.imageRef} 
            alt="Research Hero" 
            fill 
            className="object-cover opacity-20 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-gray-50 pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Research
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {data.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            {data.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2, 3, 4: Client Logic (Spotlight, Grid, Modal) */}
      <ResearchClientWrapper 
        featured={featured} 
        publications={publications} 
        publicationsTitle={data.publicationsTitle} 
      />

    </main>
  );
}
