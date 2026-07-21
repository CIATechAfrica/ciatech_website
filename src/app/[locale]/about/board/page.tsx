import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeroBanner from "@/components/blocks/HeroBanner";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Board of Directors | CIATECH Africa",
  description: "The leadership guiding CIATECH Africa's vision.",
};

export default async function BoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  let boardMembers = [];
  try {
    boardMembers = await client.fetch(`*[_type == "boardMember" && language == "${locale}"] | order(orderRank asc)`);
  } catch (error) {
    console.warn("Sanity fetch skipped due to network timeout.");
  }
  const heroData = {
    title: "Board of Directors",
    description: "The visionary leadership guiding CIATECH Africa.",
    imageRef: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    ctas: []
  };

  return (
    <main className="pt-24 bg-white min-h-screen">
      <HeroBanner data={heroData} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to About Us
        </Link>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member: any) => (
            <div key={member._id} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-100 shadow-sm border border-gray-100">
                {member.image && (
                  <Image 
                    src={urlForImage(member.image)?.url() || ""} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                  />
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-gray-500 text-center uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
