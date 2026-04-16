import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeData } from "@/types";

interface AboutSectionProps {
  data: HomeData["aboutTeaser"];
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="bg-white overflow-hidden py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Teaser Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-secondary" />
              <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
                About Us
              </h3>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-8">
              {data.heading}
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {data.description}
            </p>
            
            <Link 
              href={data.link.href}
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-bold text-sm tracking-wide hover:bg-secondary hover:text-primary transition-all shadow-lg shadow-primary/20 group hover:-translate-y-1"
            >
              {data.link.label}
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Right Side: Cinematic Image */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src={data.imageRef}
              alt="About CIATECH"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
