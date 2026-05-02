"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { HomeData } from "@/types";

interface PartnershipsTeaserProps {
  data: HomeData["partnerships"];
}

export default function PartnershipsTeaser({ data }: PartnershipsTeaserProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Triple the array to aggressively guarantee an infinite scroll width on wide screens
  const infiniteLogos = data.logos ? [...data.logos, ...data.logos, ...data.logos] : [];

  // Auto-scroll Marquee motor logic via requestAnimationFrame for 60fps smoothness
  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;
    
    // Browsers truncate scrollLeft fractions. We track precise position here:
    let exactScrollPos = scrollContainer ? scrollContainer.scrollLeft : 0;

    const scrollStep = () => {
      if (scrollContainer && !isHovered) {
        exactScrollPos += 1; // 1 pixel per frame (approx 60px per second)
        
        // Loop back to start seamlessly once we pass the first 1/3 duplicate block
        if (exactScrollPos >= (scrollContainer.scrollWidth / 3)) {
          exactScrollPos = 0;
        }
        
        scrollContainer.scrollLeft = exactScrollPos;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollManual = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Pixel jump distance on arrow click
      scrollRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        
        {/* Top Header: Centered Editorial Hook */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-secondary" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-sm">
              {data.heading}
            </h3>
            <span className="w-8 h-px bg-secondary" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {data.subHeading}
          </h2>
          
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
            {data.description}
          </p>

          {data.link && (
            <Link 
              href={data.link.href}
              className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group"
            >
              {data.link.label}
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Carousel Container (Arrows + Scroll Track) */}
        <div className="relative mt-8"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollManual("left")}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-secondary hover:border-secondary transition-all duration-300 z-20 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-secondary" />
          </button>
          
          <button 
            onClick={() => scrollManual("right")}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 hover:text-secondary hover:border-secondary transition-all duration-300 z-20 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-secondary" />
          </button>

          {/* Scrolling Track */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth py-6 mx-8 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />

            {infiniteLogos.map((partner: any, idx: number) => (
              <div 
                key={`${partner.id}-${idx}`} 
                className="group flex-none w-64 md:w-80 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 flex items-center justify-center p-8 h-32 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={partner.imageRef} 
                    alt={partner.name} 
                    fill
                    className="object-contain filter opacity-100 md:grayscale md:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 p-2" 
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
