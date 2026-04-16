import { partnershipsData } from "../../../content/partnerships";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Landmark, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import React from 'react';

// Map icon strings to actual Lucide components dynamically
const IconMap: Record<string, React.ReactNode> = {
  "globe-2": <Globe2 className="w-8 h-8 text-primary" />,
  "landmark": <Landmark className="w-8 h-8 text-primary" />,
  "book-open": <BookOpen className="w-8 h-8 text-primary" />,
  "briefcase": <Briefcase className="w-8 h-8 text-primary" />
};

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gray-900 py-32 lg:py-48">
        <div className="absolute inset-0">
          <Image 
            src={partnershipsData.hero.imageRef} 
            alt="Partnerships Hero" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 break-words hyphens-auto">
            {partnershipsData.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {partnershipsData.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. COLLABORATIVE MODELS (4-Card Grid) */}
      <section className="py-24 sm:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{partnershipsData.modelsTitle}</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{partnershipsData.modelsSubtext}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipsData.models.map((model) => (
              <div key={model.id} className="group bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-secondary transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                  {IconMap[model.iconName] || <Globe2 className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.category}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOGO DIRECTORY (Categorized Grids) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{partnershipsData.directoryTitle}</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{partnershipsData.directorySubtext}</p>
          </div>

          <div className="space-y-24">
            {partnershipsData.directory.map((categoryData, index) => (
              <div key={index} className="relative">
                <div className="mb-10 text-center sm:text-left flex items-center gap-6">
                  <h3 className="text-3xl font-black text-gray-900 whitespace-nowrap">{categoryData.category}</h3>
                  <div className="h-px bg-gray-200 hidden sm:block w-full"></div>
                </div>
                <p className="text-gray-500 mb-8 text-lg sm:text-left text-center">{categoryData.description}</p>
                
                {/* Logo Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryData.logos.map((logo) => (
                    <div 
                      key={logo.id} 
                      className="group aspect-video bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={logo.imageRef} 
                          alt={logo.name} 
                          fill
                          className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 p-2" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BECOME A PARTNER CTA */}
      <section className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {partnershipsData.cta.heading}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
            {partnershipsData.cta.subtext}
          </p>
          <Link 
            href={partnershipsData.cta.button.href}
            className="inline-flex items-center px-10 py-5 bg-secondary text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-white/20 text-lg"
          >
            {partnershipsData.cta.button.label}
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

    </main>
  );
}
