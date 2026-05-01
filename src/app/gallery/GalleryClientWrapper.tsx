"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin, X, Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPageData } from "@/types";

export default function GalleryClientWrapper({ data }: { data: GalleryPageData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex !== null ? data.images[activeIndex] : null;

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === data.images.length - 1 ? 0 : activeIndex + 1);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === 0 ? data.images.length - 1 : activeIndex - 1);
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") {
        setActiveIndex(activeIndex === data.images.length - 1 ? 0 : activeIndex + 1);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex(activeIndex === 0 ? data.images.length - 1 : activeIndex - 1);
      }
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, data.images.length]);

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Gallery
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {data.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            {data.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. THE VISUAL MASONRY GRID */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-8 mb-16 gap-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              {data.gridTitle}
            </h2>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Search className="w-4 h-4" /> Visual Impact Records
            </div>
          </div>

          {/* Utilizing CSS Grid for an explicit masonry-style feel that is highly rigorous */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {data.images.map((item, index) => (
              <div 
                key={item._id || item.id} 
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 bg-white ${item.gridSize || item.span || 'col-span-1'}`}
                onClick={() => setActiveIndex(index)}
              >
                <Image 
                  src={item.imageRef}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-90 lg:opacity-60 lg:group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                      <MapPin className="w-3.5 h-3.5 mr-1" /> {item.location}
                    </span>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-300">
                      <Calendar className="w-3.5 h-3.5 mr-1" /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE LIGHTBOX MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] flex animate-in fade-in duration-300">
          {/* Cinematic Blackout Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            onClick={() => setActiveIndex(null)}
          />
          
          <button 
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 z-[110] w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
            title="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Overlay Container */}
          <div className="absolute inset-0 z-[105] pointer-events-none flex items-center justify-between px-4 sm:px-12">
            <button 
              onClick={showPrev}
              className="pointer-events-auto w-14 h-14 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 backdrop-blur-md"
              title="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={showNext}
              className="pointer-events-auto w-14 h-14 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 backdrop-blur-md"
              title="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="relative w-full h-full flex flex-col pointer-events-none items-center justify-center p-4 sm:p-12 z-[100]">
            <div className="relative w-full max-w-6xl h-[70vh] rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(226,173,0,0.1)] pointer-events-auto border border-white/10">
              <Image 
                src={activeImage.imageRef}
                alt={activeImage.title}
                fill
                className="object-contain sm:object-cover bg-black"
                quality={100}
              />
            </div>
            
            <div className="mt-8 text-center max-w-3xl px-6 pointer-events-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                {activeImage.title}
              </h2>
              <div className="flex items-center justify-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                <span className="flex items-center text-primary">
                  <MapPin className="w-4 h-4 mr-2" /> {activeImage.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" /> {activeImage.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
