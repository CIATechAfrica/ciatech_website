import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HomeData } from "@/types";

interface CTASectionProps {
  data: HomeData["cta"];
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
       
       {/* --- THE PAINTED BACKGROUNDS --- */}
       {/* Top Half: Mirrors the bottom of the ContactUs component */}
       <div className="absolute top-0 left-0 w-full h-1/2 flex bg-white z-0" />
       
       {/* Bottom Half: Mirrors the Global Footer */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#000000] z-0" />

       {/* --- THE CONTENT (Safe Document Flow) --- */}
       <div className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 flex justify-center">
          
          {/* ALX-Style Horizontal Banner */}
          <div className="w-full max-w-6xl bg-primary rounded-[2rem] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-[0_20px_50px_-15px_rgba(142,85,22,0.5)] justify-between border border-white/10">
          
          <div className="flex flex-col sm:flex-row items-center gap-8 flex-1 w-full text-center sm:text-left">
            
            {/* Asymmetrical Profile/Image Cutout */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 relative hidden sm:block rounded-tl-[4rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[4rem] overflow-hidden bg-white/10 border-4 border-white/5 shadow-inner">
               <Image 
                 src={data.imageRef || "/images/hero.png"} 
                 alt="Join us" 
                 fill 
                 className="object-cover"
               />
            </div>
            
            {/* Left-Aligned Text Block */}
            <div className="flex pl-2 flex-col">
               <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3 leading-tight">
                 {data.heading}
               </h2>
               <p className="text-white/80 text-[15px] sm:text-base max-w-lg leading-relaxed">
                 {data.subtext}
               </p>
            </div>
          </div>
          
          {/* Right Outlined Button Block */}
          <div className="shrink-0 pt-4 lg:pt-0">
            <Link 
              href={data.primaryCTA.href}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white text-white font-medium hover:bg-white hover:text-primary transition-all whitespace-nowrap shadow-sm"
            >
              {data.primaryCTA.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
       </div>
       </div>
    </section>
  );
}
