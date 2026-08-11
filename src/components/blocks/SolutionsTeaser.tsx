import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { HomeData } from "@/types";
import { useTranslations } from "next-intl";

interface SolutionsTeaserProps {
  data: HomeData["solutionsTeaser"];
}

export default function SolutionsTeaser({ data }: SolutionsTeaserProps) {
  const t = useTranslations("UI");

  if (!data || !data.items) return null;

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glowing aurora effects to signify a 'Tech Solutions' engine room */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Center-Aligned and optimized for dark mode contrast */}
        <div className="max-w-3xl mx-auto text-center mb-24 relative">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              {t("ecosystem_engineering")}
            </h3>
            <span className="w-8 h-px bg-secondary opacity-50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {data.subtext}
          </p>
        </div>

        {/* Solutions Cards Grid - Glassmorphism over Dark BG */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.items.slice(0, 3).map((solution: any, index: number) => (
            <Link 
              href="/solutions"
              key={solution._key || solution._id || index} 
              className="bg-white/5 backdrop-blur-md p-10 py-16 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500 group flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(226,173,0,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black text-primary px-2 leading-tight tracking-tight group-hover:text-secondary transition-colors duration-300">
                {solution.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Bridge CTA routing users to the full Solutions directory */}
        <div className="mt-20 flex justify-center">
          <Link 
            href={data.viewAllLink.href}
            className="inline-flex justify-center items-center px-10 py-5 rounded-full font-bold text-sm bg-white text-gray-900 hover:bg-primary hover:text-white transition-all shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)] group"
          >
            {data.viewAllLink.label}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
