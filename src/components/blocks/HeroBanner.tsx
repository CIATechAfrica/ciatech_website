import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HomeData } from "@/types";

interface HeroBannerProps {
  data: HomeData["hero"];
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const renderTitle = () => {
    return (
      <h1 
        className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#facc15] to-white leading-[1.1] pb-2 drop-shadow-sm text-left text-balance w-full shrink-0" 
      >
        {data.title}
      </h1>
    );
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gray-900 rounded-b-[3rem] lg:rounded-b-[5rem]">
      
      {/* Immersive Background Image */}
      <Image 
        src={data.imageRef}
        alt="CIATECH Innovation Hub"
        fill
        className="object-cover object-center absolute inset-0 z-0 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        priority
        quality={100}
      />

      {/* Hero Cinematic Left-Weighted Shadow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1a110a] via-[#1a110a]/95 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-black/10" />

    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* LEFT HALF: Typography Anchor */}
          <div className="flex flex-col items-start text-left max-w-xl">
            
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-2xl z-20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(226,173,0,0.8)]" />
              {data.badge}
            </div>
            
            <div className="z-20 relative">
              {renderTitle()}
            </div>
            
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed font-light drop-shadow-md z-20 relative">
              {data.description}
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full z-20 relative">
              {data.ctas.map((cta: any, idx: number) => {
                if (idx === 0) {
                  return (
                    <Link 
                      key={cta.label}
                      href={cta.href}
                      className="inline-flex justify-center items-center px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_8px_30px_-8px_rgba(226,173,0,0.6)] hover:-translate-y-1 transition-all duration-300"
                    >
                      {cta.label}
                    </Link>
                  );
                }
                if (idx === 1) {
                  return (
                    <Link 
                      key={cta.label}
                      href={cta.href}
                      className="inline-flex justify-center items-center px-8 py-4 rounded-full font-bold text-sm bg-white/5 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-sm group"
                    >
                      {cta.label}
                    </Link>
                  );
                }
                return (
                  <Link 
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex justify-center items-center px-4 py-4 font-bold text-sm text-secondary hover:text-white transition-all group"
                  >
                    {cta.label}
                    <ArrowRight className="w-5 h-5 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>
        
        </div>
      </div>

    </section>
  );
}
