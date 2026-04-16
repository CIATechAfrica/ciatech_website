import Link from "next/link";
import { ArrowRight, Microscope, Rocket } from "lucide-react";
import { HomeData } from "@/types";

interface Props {
  research: HomeData["researchTeaser"];
  opportunities: HomeData["opportunitiesTeaser"];
}

export default function ResearchAndOpportunities({ research, opportunities }: Props) {
  return (
    <section className="flex flex-col lg:flex-row w-full border-t border-gray-100">
      
      {/* 50% LEFT: Research Panel (Light Mode) */}
      <div className="flex-1 bg-gray-50 px-6 py-20 lg:py-28 lg:px-20 xl:px-28 border-r border-gray-200">
        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0">
          
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8">
             <Microscope className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
            {research.heading}
          </h2>
          <p className="text-lg text-gray-500 font-light mb-10 leading-relaxed">
            {research.description}
          </p>
          
          {/* Interactive Action Rows */}
          <ul className="space-y-4 mb-12">
            {research.items.map((item, idx) => (
              <li key={idx} className="flex items-center group font-medium text-gray-700 text-[15px] p-5 bg-white rounded-2xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer max-w-lg">
                <span className="flex-1 pr-4">{item}</span>
                <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </li>
            ))}
          </ul>
          
          <Link href={research.link.href} className="inline-flex items-center font-bold text-primary group tracking-wide text-sm uppercase">
            {research.link.label}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>

      {/* 50% RIGHT: Opportunities Panel (Dark Mode) */}
      <div className="flex-1 bg-[#0a0a0a] px-6 py-20 lg:py-28 lg:px-20 xl:px-28 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary opacity-10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-xl mx-auto lg:mr-auto lg:ml-0 relative z-10">
          
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
             <Rocket className="w-8 h-8 text-secondary" />
          </div>
          
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            {opportunities.heading}
          </h2>
          <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
            Work With Us
          </p>
          
          {/* Interactive Action Rows */}
          <ul className="space-y-4 mb-12">
            {opportunities.items.map((item, idx) => (
              <li key={idx} className="flex items-center group font-medium text-gray-300 text-[15px] p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/30 hover:bg-white/10 transition-all cursor-pointer max-w-lg">
                <span className="flex-1 pr-4">{item}</span>
                <span className="w-8 h-8 rounded-full bg-black/30 border border-white/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-secondary transform group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </li>
            ))}
          </ul>
          
          <Link href={opportunities.link.href} className="inline-flex items-center font-bold text-secondary group tracking-wide text-sm uppercase">
            {opportunities.link.label}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>
      
    </section>
  );
}
