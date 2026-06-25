import { solutionsData } from "../../../../content/solutions";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rocket, BrainCircuit, Landmark, GraduationCap, Globe } from "lucide-react";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

// Map icon strings to actual Lucide components dynamically
const IconMap: Record<string, React.ReactNode> = {
  "rocket": <Rocket className="w-8 h-8 text-primary" />,
  "brain-circuit": <BrainCircuit className="w-8 h-8 text-primary" />,
  "landmark": <Landmark className="w-8 h-8 text-primary" />,
  "graduation-cap": <GraduationCap className="w-8 h-8 text-primary" />,
  "globe": <Globe className="w-8 h-8 text-primary" />,
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "solutionsPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || solutionsData.seo.title,
      description: seoData?.seoDescription || solutionsData.seo.description,
    };
  } catch (error) {
    return {
      title: solutionsData.seo.title,
      description: solutionsData.seo.description,
    };
  }
}

async function getSanitySolutionsData() {
  try {
    const data = await client.fetch(`{
      "solutionsPage": *[_type == "solutionsPage"][0],
      "solutions": *[_type == "solution"] | order(_createdAt asc),
      "callToAction": *[_type == "callToAction"][0]
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function SolutionsPage() {
  const sanityData = await getSanitySolutionsData();

  const data = {
    ...solutionsData,
    hero: {
      ...solutionsData.hero,
      heading: sanityData?.solutionsPage?.heroHeading || solutionsData.hero.heading,
      subtext: sanityData?.solutionsPage?.heroSubtext || solutionsData.hero.subtext,
    },
    introTitle: sanityData?.solutionsPage?.introTitle || solutionsData.introTitle,
    introSubtext: sanityData?.solutionsPage?.introSubtext || solutionsData.introSubtext,
    solutions: sanityData?.solutions?.length > 0 
      ? sanityData.solutions.map((sol: any) => ({
          id: sol._id,
          title: sol.title,
          description: sol.description,
          iconName: sol.iconName,
          features: sol.focusAreas || [],
          imageRef: "/images/hero.png" // Fallback not used in UI but keeps type happy
        }))
      : solutionsData.solutions,
    cta: {
      ...solutionsData.cta,
      heading: sanityData?.callToAction?.heading || solutionsData.cta.heading,
      subtext: sanityData?.callToAction?.description || solutionsData.cta.subtext,
      primaryCTA: {
        label: sanityData?.callToAction?.primaryLabel || solutionsData.cta.primaryCTA.label,
        href: sanityData?.callToAction?.primaryHref || solutionsData.cta.primaryCTA.href,
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image 
            src={data.hero.imageRef} 
            alt="Solutions Hero" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              {data.introTitle}
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

      {/* 2. THE MINIMALIST FOCUS GRID */}
      <section className="py-24 sm:py-32 bg-gray-50 relative -mt-10 lg:-mt-16 z-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {data.solutions.map((solution: any, index: number) => (
              <div 
                key={solution.id} 
                className="group bg-white rounded-[3rem] p-10 sm:p-14 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Number Overlay Graphic */}
                <div className="absolute top-8 right-10 text-gray-100 font-black text-8xl tracking-tighter opacity-50 group-hover:text-primary/10 transition-colors duration-700 select-none pointer-events-none">
                  0{index + 1}
                </div>

                <div className="relative z-10 flex-grow">
                  <div className="w-20 h-20 rounded-3xl bg-white border border-gray-100 flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                    {IconMap[solution.iconName || "rocket"]}
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                    {solution.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                    {solution.description}
                  </p>

                  <div className="h-px w-full bg-gray-100 mt-auto mb-8 relative">
                    <div className="absolute left-0 top-0 h-full w-12 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                  
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Core Focus Areas</h4>
                  
                  <ul className="space-y-5">
                    {solution.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-500" />
                        <span className="text-base text-gray-700 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CONVERSION CTA */}
      <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/10 to-[#0a0a0a] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {data.cta.heading}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
            {data.cta.subtext}
          </p>
          <Link 
            href={data.cta.primaryCTA.href}
            className="inline-flex items-center px-10 py-5 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(226,173,0,0.4)] text-lg group"
          >
            {data.cta.primaryCTA.label}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
