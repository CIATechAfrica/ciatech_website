import Link from "next/link";
import { MonitorPlay, TrendingUp, Users, Shield, Landmark, Leaf, ArrowRight } from "lucide-react";
import { HomeData } from "@/types";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ReactNode> = {
  "monitor-play": <MonitorPlay className="w-8 h-8 text-secondary" />,
  "trending-up": <TrendingUp className="w-8 h-8 text-secondary" />,
  "users": <Users className="w-8 h-8 text-secondary" />,
  "shield": <Shield className="w-8 h-8 text-secondary" />,
  "landmark": <Landmark className="w-8 h-8 text-secondary" />,
  "leaf": <Leaf className="w-8 h-8 text-secondary" />
};

interface CorePillarsTeaserProps {
  data: HomeData["corePillarsTeaser"];
}

export default function CorePillarsTeaser({ data }: CorePillarsTeaserProps) {
  const t = useTranslations("UI");

  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Center-Aligned per user request */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              {t("pillars_of_impact")}
            </h3>
            <span className="w-8 h-px bg-secondary" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            {data.subtext}
          </p>
        </div>

        {/* Elevated Staggered Grid mapping exactly 6 elements into a 3x2 grid */}
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {data.pillars.map((pillar: any, index: number) => {
            const digit = `0${index + 1}`;
            return (
              <div 
                key={pillar._key || pillar._id || index}
                className="group relative bg-white p-10 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Decorative Background Number */}
                <span className="absolute -bottom-8 -right-4 text-[12rem] font-black text-gray-50 leading-none select-none pointer-events-none group-hover:text-secondary/5 transition-colors duration-500">
                  {digit}
                </span>

                <div className="relative z-10">
                  {/* Floating Icon Hexagon / Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {iconMap[pillar.iconName] || <MonitorPlay className="w-8 h-8 text-secondary" />}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light mt-auto">
                    {pillar.description}
                  </p>
                </div>

                {/* Micro interaction bar on bottom */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
