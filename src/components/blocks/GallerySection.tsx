import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { HomeData } from "@/types";

interface GalleryProps {
  data: HomeData["galleryTeaser"];
}

export default function GallerySection({ data }: GalleryProps) {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub & Spoke Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              {data.heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.subtext}
            </p>
          </div>
          
          <Link 
            href={data.link.href}
            className="group inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
          >
            {data.link.label}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-flow-row-dense">
          {data.images.slice(0, 4).map((img, index) => {
            const hubSpans = [
              "col-span-1 md:col-span-2",
              "col-span-1 md:col-span-2",
              "col-span-1 md:col-span-3",
              "col-span-1 md:col-span-1",
            ];
            const spanClass = hubSpans[index] || "col-span-1";
            
            return (
              <div 
                key={img._id || img.id} 
                className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 bg-gray-100 min-h-[300px] ${spanClass}`}
              >
              <Image 
                src={img.imageRef} 
                alt={img.title} 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              
              {/* Detailed Data-Overlay permanent on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                      <MapPin className="w-3 h-3 mr-1" /> {img.location}
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-300">
                      <Calendar className="w-3 h-3 mr-1" /> {img.date}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl mt-1 line-clamp-2">{img.title}</h3>
                </div>
              </div>
              
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
