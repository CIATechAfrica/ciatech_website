import { partnershipsData } from "../../../../content/partnerships";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Landmark, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import React from 'react';
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next";
import { PartnerLogo } from "@/types";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "partnershipsPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || partnershipsData.seo.title,
      description: seoData?.seoDescription || partnershipsData.seo.description,
    };
  } catch (error) {
    return {
      title: partnershipsData.seo.title,
      description: partnershipsData.seo.description,
    };
  }
}

async function getSanityPartnershipsData() {
  try {
    const data = await client.fetch(`{
      "pageData": *[_type == "partnershipsPage"][0],
      "logos": *[_type == "partnerLogo"] | order(_createdAt asc)
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

// Map icon strings to actual Lucide components dynamically
const IconMap: Record<string, React.ReactNode> = {
  "globe-2": <Globe2 className="w-8 h-8 text-primary" />,
  "landmark": <Landmark className="w-8 h-8 text-primary" />,
  "book-open": <BookOpen className="w-8 h-8 text-primary" />,
  "briefcase": <Briefcase className="w-8 h-8 text-primary" />
};

export default async function PartnershipsPage() {
  const sanityData = await getSanityPartnershipsData();

  // Merge Page Data
  const data = {
    ...partnershipsData,
    hero: {
      ...partnershipsData.hero,
      heading: sanityData?.pageData?.heroHeading || partnershipsData.hero.heading,
      subtext: sanityData?.pageData?.heroSubtext || partnershipsData.hero.subtext,
    },
    directoryTitle: sanityData?.pageData?.directoryTitle || partnershipsData.directoryTitle,
    directorySubtext: sanityData?.pageData?.directorySubtext || partnershipsData.directorySubtext,
    cta: {
      heading: sanityData?.pageData?.ctaHeading || partnershipsData.cta.heading,
      subtext: sanityData?.pageData?.ctaSubtext || partnershipsData.cta.subtext,
      button: {
        label: sanityData?.pageData?.ctaButtonLabel || partnershipsData.cta.button.label,
        href: sanityData?.pageData?.ctaButtonHref || partnershipsData.cta.button.href,
      }
    }
  };

  // Group Logos
  const sanityLogos: PartnerLogo[] = sanityData?.logos || [];
  
  // Create our grouped categories. 
  // We use the same categories defined in the Sanity schema options.
  const categoriesMap = [
    {
      title: "Government & Civic Institutions",
      description: "Public sector entities utilizing our infrastructure.",
      logos: sanityLogos.filter(l => l.category === 'Government & Civic Institutions')
    },
    {
      title: "Multilateral & UN Agencies",
      description: "Agencies funding and guiding systemic development.",
      logos: sanityLogos.filter(l => l.category === 'Multilateral & UN Agencies')
    },
    {
      title: "Private Sector Leaders",
      description: "Technology and corporate partners driving ecosystem innovation.",
      logos: sanityLogos.filter(l => l.category === 'Private Sector Leaders')
    },
    {
      title: "Academic Institutions",
      description: "Bridging the gap between theoretical research and tech deployment.",
      logos: sanityLogos.filter(l => l.category === 'Academic Institutions')
    }
  ];

  // If Sanity has logos, we use the grouped ones. Otherwise, we fallback to the static directory.
  const hasSanityLogos = sanityLogos.length > 0;

  return (
    <main className="min-h-screen bg-white pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gray-900 py-32 lg:py-48">
        <div className="absolute inset-0">
          <Image 
            src={data.hero.imageRef} 
            alt="Partnerships Hero" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
            {data.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {data.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. COLLABORATIVE MODELS (4-Card Grid - Hardcoded Static Data) */}
      <section className="py-24 sm:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{data.modelsTitle}</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{data.modelsSubtext}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.models.map((model) => (
              <div key={model.id} className="group bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                  {IconMap[model.iconName] || <Globe2 className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.category}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOGO DIRECTORY (Categorized Grids) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{data.directoryTitle}</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{data.directorySubtext}</p>
          </div>

          <div className="space-y-24">
            {hasSanityLogos ? (
              // RENDER SANITY LOGOS
              categoriesMap.map((cat, index) => (
                cat.logos.length > 0 && (
                  <div key={index} className="relative">
                    <div className="mb-10 text-center sm:text-left flex items-center gap-6">
                      <h3 className="text-3xl font-black text-gray-900">{cat.title}</h3>
                      <div className="h-px bg-gray-200 hidden sm:block w-full"></div>
                    </div>
                    <p className="text-gray-500 mb-8 text-lg sm:text-left text-center">{cat.description}</p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.logos.map((logo) => (
                        <div 
                          key={logo._id || logo.id} 
                          className="group aspect-video bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-4 sm:p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            {logo.logo && urlForImage(logo.logo) ? (
                              <Image 
                                src={urlForImage(logo.logo)?.url() || ""} 
                                alt={logo.name} 
                                fill
                                className="object-contain filter opacity-100 md:grayscale md:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                              />
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))
            ) : (
              // RENDER STATIC FALLBACK LOGOS
              data.directory.map((categoryData, index) => (
                <div key={index} className="relative">
                  <div className="mb-10 text-center sm:text-left flex items-center gap-6">
                    <h3 className="text-3xl font-black text-gray-900">{categoryData.category}</h3>
                    <div className="h-px bg-gray-200 hidden sm:block w-full"></div>
                  </div>
                  <p className="text-gray-500 mb-8 text-lg sm:text-left text-center">{categoryData.description}</p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryData.logos.map((logo) => (
                      <div 
                        key={logo.id} 
                        className="group aspect-video bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-4 sm:p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image 
                            src={logo.imageRef!} 
                            alt={logo.name} 
                            fill
                            className="object-contain filter opacity-100 md:grayscale md:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 4. BECOME A PARTNER CTA */}
      <section className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {data.cta.heading}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
            {data.cta.subtext}
          </p>
          <Link 
            href={data.cta.button.href}
            className="inline-flex items-center px-10 py-5 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-white/20 text-lg"
          >
            {data.cta.button.label}
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

    </main>
  );
}
