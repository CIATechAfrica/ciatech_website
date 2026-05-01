import { Metadata } from "next";
import { opportunitiesData } from "../../../content/opportunities";
import { client } from "@/sanity/lib/client";
import { ArrowUpRight, MapPin, Briefcase, Lightbulb } from "lucide-react";
import { OpenRole } from "@/types";
import Link from "next/link";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "opportunitiesPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || opportunitiesData.seo.title,
      description: seoData?.seoDescription || opportunitiesData.seo.description,
    };
  } catch (error) {
    return {
      title: opportunitiesData.seo.title,
      description: opportunitiesData.seo.description,
    };
  }
}

async function getSanityOpportunitiesData() {
  try {
    const data = await client.fetch(`{
      "opportunitiesPage": *[_type == "opportunitiesPage"][0],
      "roles": *[_type == "openRole"] | order(_createdAt asc)
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

function RoleCard({ role, icon: Icon }: { role: OpenRole; icon: React.ElementType }) {
  return (
    <div className="group bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex flex-wrap gap-3 mb-6 relative z-10">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest">
          <Briefcase className="w-3.5 h-3.5 mr-2 text-primary" />
          {role.type}
        </span>
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 mr-2 text-primary" />
          {role.location}
        </span>
      </div>

      <div className="flex items-start gap-5 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
          {role.title}
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow relative z-10">
        {role.description}
      </p>

      <div className="mt-auto relative z-10 border-t border-gray-50 pt-6">
        <Link 
          href={role.applyUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center w-full justify-between px-6 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-all duration-300 group/btn shadow-[0_4px_14px_0_rgba(17,24,39,0.1)] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)]"
        >
          <span>Submit Application</span>
          <ArrowUpRight className="w-5 h-5 transform group-hover/btn:rotate-45 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default async function OpportunitiesPage() {
  const sanityData = await getSanityOpportunitiesData();

  // Split fetched roles into Fellowships and Careers
  let sanityFellowships: OpenRole[] = [];
  let sanityCareers: OpenRole[] = [];

  if (sanityData?.roles && sanityData.roles.length > 0) {
    sanityFellowships = sanityData.roles.filter((r: any) => r.category === 'Fellowship');
    sanityCareers = sanityData.roles.filter((r: any) => r.category === 'Career');
  }

  // Deep Merge Sanity Data over Static Fallback Data
  const data = {
    ...opportunitiesData,
    hero: {
      ...opportunitiesData.hero,
      heading: sanityData?.opportunitiesPage?.heroHeading || opportunitiesData.hero.heading,
      subtext: sanityData?.opportunitiesPage?.heroSubtext || opportunitiesData.hero.subtext,
    },
    fellowshipsTitle: sanityData?.opportunitiesPage?.fellowshipsTitle || opportunitiesData.fellowshipsTitle,
    fellowshipsSubtext: sanityData?.opportunitiesPage?.fellowshipsSubtext || opportunitiesData.fellowshipsSubtext,
    careersTitle: sanityData?.opportunitiesPage?.careersTitle || opportunitiesData.careersTitle,
    careersSubtext: sanityData?.opportunitiesPage?.careersSubtext || opportunitiesData.careersSubtext,
    fellowships: sanityFellowships.length > 0 ? sanityFellowships : opportunitiesData.fellowships,
    careers: sanityCareers.length > 0 ? sanityCareers : opportunitiesData.careers,
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Opportunities
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {data.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            {data.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. FELLOWSHIPS GRID */}
      {data.fellowships.length > 0 && (
        <section className="relative -mt-16 z-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="mb-12 border-b border-gray-200 pb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50 backdrop-blur-xl p-8 rounded-[2rem] border-x border-t shadow-sm">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                {data.fellowshipsTitle}
              </h2>
              <p className="text-gray-600 max-w-2xl font-light">
                {data.fellowshipsSubtext}
              </p>
            </div>
            <div className="hidden lg:block w-32 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.fellowships.map((role) => (
              <RoleCard key={role._id || role.id} role={role} icon={Lightbulb} />
            ))}
          </div>
        </section>
      )}

      {/* 3. CAREERS GRID */}
      {data.careers.length > 0 && (
        <section className="bg-gray-100 py-24 sm:py-32 border-t border-gray-200">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                {data.careersTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {data.careersSubtext}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.careers.map((role) => (
                <RoleCard key={role._id || role.id} role={role} icon={Briefcase} />
              ))}
            </div>

          </div>
        </section>
      )}

    </main>
  );
}
