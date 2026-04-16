import Link from "next/link";
import { BrainCircuit, Lightbulb, Users, Microscope, ArrowRight } from "lucide-react";
import { HomeData } from "@/types";

interface InitiativesGridProps {
  data: HomeData["initiatives"];
}

const iconMap: Record<string, React.ReactNode> = {
  "brain-circuit": <BrainCircuit className="w-8 h-8 text-secondary" />,
  "lightbulb": <Lightbulb className="w-8 h-8 text-secondary" />,
  "users": <Users className="w-8 h-8 text-secondary" />,
  "microscope": <Microscope className="w-8 h-8 text-secondary" />,
};

export default function InitiativesGrid({ data }: InitiativesGridProps) {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Left-Aligned Header */}
        <div className="max-w-3xl mb-24 relative">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Flagship Initiatives
            </h3>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight flex flex-col">
            <span>Scaling</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              What Works
            </span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            A look into our targeted programs driving localized impact across the continent.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((initiative: any, index: number) => {
            // Apply a massive margin-top to the second column to create a beautiful staggered layout
            const isStaggered = index % 2 !== 0;

            return (
              <div 
                key={initiative.id} 
                className={`group ${isStaggered ? 'md:mt-24' : ''}`}
              >
                <Link 
                  href={initiative.href}
                  className="block bg-white p-10 lg:p-14 rounded-[3rem] border border-gray-100 hover:border-transparent shadow-sm hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-secondary/20"
                >
                  
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 shadow-sm transform group-hover:bg-secondary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      {iconMap[initiative.iconName] || <BrainCircuit className="w-8 h-8 text-secondary" />}
                    </div>
                    
                    <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {initiative.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                      {initiative.description}
                    </p>
                    
                    {/* Conditionally render detailed bullet points if provided */}
                    {initiative.items && initiative.items.length > 0 && (
                      <ul className="mb-6 space-y-3">
                        {initiative.items.map((item: string, idx: number) => (
                           <li key={idx} className="flex items-start text-sm text-gray-700 font-medium group/list">
                             <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-4 shrink-0 transition-all group-hover/list:scale-150" />
                             <span className="leading-relaxed">{item}</span>
                           </li>
                        ))}
                      </ul>
                    )}

                    {/* Conditionally render final initiative summary statement */}
                    {initiative.footerText && (
                      <p className="text-[0.9rem] text-gray-500 font-medium leading-relaxed mb-8 italic border-l-2 border-primary/20 pl-4">
                        {initiative.footerText}
                      </p>
                    )}
                    
                    {/* Interaction Bridge */}
                    <div className={`flex items-center text-sm font-bold text-gray-400 uppercase tracking-widest group-hover:text-secondary transition-colors ${!initiative.items && !initiative.footerText ? 'mb-8' : ''} mt-auto pt-4 border-t border-transparent group-hover:border-gray-50`}>
                      Explore Initiative
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
