import Link from "next/link";
import { HeartHandshake, Globe2, Rocket, Handshake, Layers, ArrowRight } from "lucide-react";
import { HomeData } from "@/types";

interface ImpactStatsGridProps {
  data: HomeData["impactStats"];
}

const iconMap: Record<string, React.ReactNode> = {
  "heart-handshake": <HeartHandshake className="w-6 h-6 text-white/50" />,
  "globe-2": <Globe2 className="w-6 h-6 text-white/50" />,
  "rocket": <Rocket className="w-6 h-6 text-white/50" />,
  "handshake": <Handshake className="w-6 h-6 text-white/50" />,
  "layers": <Layers className="w-6 h-6 text-white/50" />,
};

export default function ImpactStatsGrid({ data }: ImpactStatsGridProps) {
  return (
    <section className="relative overflow-hidden w-full py-24 sm:py-32">
      
      {/* Cinematic Banner Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a110a] to-[#2a1a0f] opacity-90" />
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-primary opacity-30 blur-[150px] transform -rotate-12" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[150%] bg-secondary opacity-20 blur-[150px] transform rotate-12" />
        {/* Subtle noise/texture overlay for a premium print feel */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl border-b border-white/10 pb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-white/30" />
            <h3 className="text-white/80 font-bold tracking-widest uppercase text-xs">
              IMPACT
            </h3>
            <span className="w-8 h-px bg-white/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight mb-4">
            {data.heading}
          </h2>
          {data.subtext && (
            <p className="text-lg text-white/70 font-light tracking-wide">
              {data.subtext}
            </p>
          )}
        </div>

        {/* 5-Column Inline Stats Layout */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12 w-full max-w-7xl mx-auto justify-items-center">
          {data.stats.map((stat: any, index: number) => (
            <div 
              key={stat._key || stat._id || index} 
              className="flex flex-col items-center text-center group w-full px-2"
            >
              <div className="mb-4 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500">
                {iconMap[stat.iconName] || <HeartHandshake className="w-6 h-6 text-white/50" />}
              </div>
              
              <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 tabular-nums drop-shadow-lg relative z-10">
                {stat.value}
                <span className="absolute -inset-2 bg-secondary opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full" />
              </div>
              
              <p className="text-[15px] font-bold text-white/90 max-w-[160px] leading-relaxed relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Funnel Link to Impact Spoke Page */}
        {data.viewReportLink && (
          <div className="mt-20 flex justify-center w-full">
            <Link 
              href={data.viewReportLink.href}
              className="inline-flex justify-center items-center px-10 py-5 rounded-full font-bold text-sm bg-white text-gray-900 hover:bg-primary hover:text-white transition-all shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)] group"
            >
              {data.viewReportLink.label}
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
      
    </section>
  );
}
