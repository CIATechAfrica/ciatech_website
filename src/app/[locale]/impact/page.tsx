import { impactData } from "../../../../content/impact";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, HeartHandshake, Globe2, Rocket, Handshake, Layers, 
  Landmark, Laptop, TreePine, ShieldCheck, CheckCircle2 
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

export const revalidate = 0;

const IconMap: Record<string, React.ReactNode> = {
  "heart-handshake": <HeartHandshake className="w-10 h-10 text-white/50 group-hover:text-primary transition-colors duration-500" />,
  "globe-2": <Globe2 className="w-10 h-10 text-white/50 group-hover:text-primary transition-colors duration-500" />,
  "rocket": <Rocket className="w-10 h-10 text-white/50 group-hover:text-primary transition-colors duration-500" />,
  "handshake": <Handshake className="w-10 h-10 text-white/50 group-hover:text-primary transition-colors duration-500" />,
  "layers": <Layers className="w-10 h-10 text-white/50 group-hover:text-primary transition-colors duration-500" />,
  "landmark": <Landmark className="w-8 h-8 text-primary" />,
  "laptop": <Laptop className="w-8 h-8 text-primary" />,
  "tree-pine": <TreePine className="w-8 h-8 text-primary" />,
  "shield-check": <ShieldCheck className="w-8 h-8 text-primary" />
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "impactPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || impactData.seo.title,
      description: seoData?.seoDescription || impactData.seo.description,
    };
  } catch (error) {
    return {
      title: impactData.seo.title,
      description: impactData.seo.description,
    };
  }
}

async function getSanityImpactData() {
  try {
    const data = await client.fetch(`{
      "impactPage": *[_type == "impactPage"][0],
      "impactStats": *[_type == "impactStat"] | order(_createdAt asc),
      "impactAreas": *[_type == "impactArea"] | order(_createdAt asc),
      "callToAction": *[_type == "callToAction"][0]
    }`);
    return data;
  } catch (err) {
    console.error("Failed to fetch Impact Data:", err);
    return null;
  }
}

export default async function ImpactPage() {
  const sanityData = await getSanityImpactData();

  const data = {
    ...impactData,
    hero: {
      ...impactData.hero,
      heading: sanityData?.impactPage?.heroHeading || impactData.hero.heading,
      subtext: sanityData?.impactPage?.heroSubtext || impactData.hero.subtext,
    },
    introTitle: sanityData?.impactPage?.introTitle || impactData.introTitle,
    introSubtext: sanityData?.impactPage?.introSubtext || impactData.introSubtext,
    areasTitle: sanityData?.impactPage?.areasTitle || impactData.areasTitle,
    stats: sanityData?.impactStats?.length > 0 
      ? sanityData.impactStats.map((stat: any) => ({
          id: stat._id,
          value: stat.value,
          label: stat.label,
          iconName: stat.iconName || "heart-handshake"
        }))
      : impactData.stats,
    impactAreas: sanityData?.impactAreas?.length > 0
      ? sanityData.impactAreas.map((area: any) => ({
          id: area._id,
          title: area.title,
          description: area.description,
          methodology: area.methodology || [],
          iconName: area.iconName || "landmark"
        }))
      : impactData.impactAreas,
    cta: {
      ...impactData.cta,
      heading: sanityData?.callToAction?.heading || impactData.cta.heading,
      subtext: sanityData?.callToAction?.description || impactData.cta.subtext,
      primaryCTA: {
        label: sanityData?.callToAction?.primaryLabel || impactData.cta.primaryCTA.label,
        href: sanityData?.callToAction?.primaryHref || impactData.cta.primaryCTA.href,
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
            alt="Impact Hero" 
            fill 
            className="object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Impact
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {data.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
            {data.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. THE GLOBAL METRICS MATRIX */}
      <section className="py-24 sm:py-32 bg-[#050505] relative -mt-10 lg:-mt-16 z-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              {data.introTitle}
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              {data.introSubtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.stats.map((stat: any) => (
              <div 
                key={stat.id} 
                className="group bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-700 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="mb-8 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 relative z-10">
                  {IconMap[stat.iconName] || <HeartHandshake className="w-10 h-10 text-white/50" />}
                </div>
                
                <div className="text-5xl font-black text-white tracking-tighter mb-4 blur-[0.5px] group-hover:blur-none transition-all duration-300 relative z-10">
                  {stat.value}
                </div>
                
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WIDE-FORMAT METHODOLOGY CARDS */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-px bg-primary opacity-50" />
              <h3 className="text-primary font-bold tracking-widest uppercase text-xs">
                Systems Breakdown
              </h3>
              <span className="w-12 h-px bg-primary opacity-50" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              {data.areasTitle}
            </h2>
          </div>

          <div className="space-y-12">
            {data.impactAreas.map((area: any, index: number) => (
              <div 
                key={area.id} 
                className="bg-white rounded-[3rem] p-10 sm:p-16 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 group relative overflow-hidden"
              >
                {/* Embedded Numeric Graphic */}
                <div className="absolute top-10 right-10 text-gray-50 font-black text-[12rem] leading-none opacity-50 group-hover:text-primary/5 transition-colors duration-700 select-none pointer-events-none -mt-10 -mr-6">
                  {index + 1}
                </div>

                <div className="relative z-10 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                    {IconMap[area.iconName] || <Landmark className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col justify-center">
                  <h4 className="border-b border-gray-100 pb-4 mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Execution Methodology
                  </h4>
                  <ul className="space-y-6">
                    {area.methodology.map((method: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <CheckCircle2 className="w-6 h-6 text-primary/40 mt-1 flex-shrink-0 group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-300" />
                        <span className="text-lg text-gray-700 font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                          {method}
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

      {/* 4. CONVERSION CTA */}
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
