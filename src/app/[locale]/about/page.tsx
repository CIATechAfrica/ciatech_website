import { aboutData } from "../../../../content/about";
import Image from "next/image";
import { Target, Lightbulb, Search, PenTool, Rocket, BarChart3 } from "lucide-react";

import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "aboutPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || aboutData.seo.title,
      description: seoData?.seoDescription || aboutData.seo.description,
    };
  } catch (error) {
    return {
      title: aboutData.seo.title,
      description: aboutData.seo.description,
    };
  }
}

async function getSanityAboutData() {
  try {
    const data = await client.fetch(`{
      "aboutPage": *[_type == "aboutPage"][0],
      "teamMembers": *[_type == "teamMember"] | order(orderRank asc)
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function AboutPage() {
  const sanityData = await getSanityAboutData();
  const approachIcons = [Search, PenTool, Rocket, BarChart3];

  const data = {
    ...aboutData,
    header: {
      ...aboutData.header,
      title: sanityData?.aboutPage?.heroTitle || aboutData.header.title,
      subtitle: sanityData?.aboutPage?.heroSubtitle || aboutData.header.subtitle,
    },
    ourStory: {
      ...aboutData.ourStory,
      heading: sanityData?.aboutPage?.ourStoryHeading || aboutData.ourStory.heading,
      content: sanityData?.aboutPage?.ourStoryContent || aboutData.ourStory.content,
    },
    missionVision: {
      ...aboutData.missionVision,
      vision: {
        title: sanityData?.aboutPage?.visionTitle || aboutData.missionVision.vision.title,
        content: sanityData?.aboutPage?.visionContent || aboutData.missionVision.vision.content,
      },
      mission: {
        title: sanityData?.aboutPage?.missionTitle || aboutData.missionVision.mission.title,
        content: sanityData?.aboutPage?.missionContent || aboutData.missionVision.mission.content,
      }
    },
    team: {
      ...aboutData.team,
      heading: sanityData?.aboutPage?.teamHeading || aboutData.team.heading,
      subtext: sanityData?.aboutPage?.teamSubtext || aboutData.team.subtext,
      members: sanityData?.teamMembers?.length > 0 
        ? sanityData.teamMembers.map((tm: any) => ({
            id: tm._id,
            name: tm.name,
            role: tm.role,
            linkedin: tm.linkedin || "#",
            imageRef: tm.image ? urlForImage(tm.image)?.url() || aboutData.team.members[0]?.imageRef : aboutData.team.members[0]?.imageRef
          }))
        : aboutData.team.members
    }
  };

  return (
    <div className="bg-white">
      
      {/* 1. HERO HEADER */}
      <div className="bg-primary/5 py-24 pt-32 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6 break-words hyphens-auto">
            {data.header.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {data.header.subtitle}
          </p>
        </div>
      </div>

      {/* 2. WHO WE ARE */}
      <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">{data.ourStory.heading}</h2>
           <p className="text-2xl font-light text-gray-600 leading-[1.8] relative z-10">
              {data.ourStory.content}
           </p>
        </div>
      </div>

      {/* 3. MISSION & VISION SPLIT */}
      <div className="bg-primary py-24 relative overflow-hidden flex items-center justify-center">
        {/* Subtle decorative background stripe matrix */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 sm:p-14 border border-white/20 transform transition-all hover:bg-white/15">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-inner">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">{data.missionVision.vision.title}</h3>
              <p className="text-xl text-gray-200 font-light leading-relaxed">
                {data.missionVision.vision.content}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 sm:p-14 border border-white/20 transform transition-all hover:bg-white/15">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-inner">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">{data.missionVision.mission.title}</h3>
              <p className="text-xl text-gray-200 font-light leading-relaxed">
                {data.missionVision.mission.content}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 4. THE APPROACH (Static/Hardcoded as requested) */}
      <div className="py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl font-black text-gray-900 mb-6">{data.approach.heading}</h3>
            <p className="text-xl text-gray-500 font-light">{data.approach.subtext}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10" />
            
            {data.approach.steps.map((step, idx) => {
              const Icon = approachIcons[idx % 4];
              return (
                <div key={step.id} className="relative group">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-8 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-secondary transition-colors duration-500">
                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <div className="text-center px-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Phase 0{idx + 1}</span>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. TEAM DIRECTORY */}
      <div className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{data.team.heading}</h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{data.team.subtext}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.team.members.slice(0, 4).map((member: any) => (
              <div key={member.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image src={member.imageRef} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none group-hover:pointer-events-auto">
                     <a href={member.linkedin} className="text-white hover:text-secondary opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 transform inline-flex items-center gap-2 font-bold pointer-events-auto text-sm">
                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                       Connect
                     </a>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-100 text-center">
                  <h4 className="text-xl font-black text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/about/team" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-[#7a4812] transition-colors shadow-md">
              View Full Team
            </a>
            <a href="/about/board" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
              Meet the Board of Directors
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
