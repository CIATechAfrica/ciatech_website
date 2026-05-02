"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Download, BookOpen, X, FileText } from "lucide-react";
import { ResearchItem } from "@/types";
import { generateAndDownloadPDF } from "@/lib/pdfGenerator";

interface ResearchClientWrapperProps {
  featured: any;
  publications: any[];
  publicationsTitle: string;
}

export default function ResearchClientWrapper({ featured, publications, publicationsTitle }: ResearchClientWrapperProps) {
  const [readingItem, setReadingItem] = useState<any | null>(null);

  // Dynamic Client-Side PDF Generation
  const handleDownload = async (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Generate the PDF dynamically on the client
    try {
      await generateAndDownloadPDF(item);
    } catch (err) {
      console.error("Failed to compile PDF:", err);
      alert("There was an error generating the document.");
    }
  };

  return (
    <>
      {/* 2. THE SPOTLIGHT FEATURE */}
      {featured && (
        <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row hover:-translate-y-2 transition-all duration-500">
            {/* Featured Image (Left side) */}
            <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
              <Image 
                src={featured.imageRef || "/images/hero.png"}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                  Featured Paper
                </span>
              </div>
            </div>

            {/* Featured Content Area */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gray-50/50">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{featured.date}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h2>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 line-clamp-3">
                {featured.fullDescription}
              </p>
              
              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button 
                  onClick={() => setReadingItem(featured)}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-gray-900 text-white font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-md shadow-gray-900/10 group/btn"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Executive Summary
                </button>
                <button 
                  onClick={(e) => handleDownload(e, featured)}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
                  title="Download Full PDF"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. THE PUBLICATIONS GRID */}
      {publications && publications.length > 0 && (
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-16">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                {publicationsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {publications.map((item) => (
                <div key={item._id || item.id} className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {item.date}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-md text-gray-600 leading-relaxed font-light mb-8 flex-grow line-clamp-3">
                    {item.fullDescription}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                    <button 
                      onClick={() => setReadingItem(item)}
                      className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"
                    >
                      Read Report <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button 
                      onClick={(e) => handleDownload(e, item)}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      title="Download Data Report"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. THE READING MODAL */}
      {readingItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto w-full h-full">
          {/* Cinematic Blur Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setReadingItem(null)}
          />

          <div className="relative bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden my-auto translate-y-0 transform transition-all">
            
            {/* Modal Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-8 py-6 flex justify-between items-start sticky top-0 z-10">
              <div className="pr-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  {readingItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  {readingItem.title}
                </h3>
              </div>
              <button 
                onClick={() => setReadingItem(null)}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors shadow-sm"
                title="Close Reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Reading Body */}
            <div className="p-8 sm:p-12">
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
                {readingItem.fullDescription && readingItem.fullDescription.split('\n').map((paragraph: string, idx: number) => {
                  if (!paragraph.trim()) return <br key={idx} />;
                  // Make the first paragraph drop-capped like the old summary
                  if (idx === 0) {
                    return (
                      <p key={idx} className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-1 first-letter:float-left mb-6">
                        {paragraph}
                      </p>
                    );
                  }
                  return (
                    <p key={idx} className="mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 border-t border-gray-100 pt-8">
                <button 
                  onClick={(e) => handleDownload(e, readingItem)}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-[#7a4812] transition-colors shadow-md"
                >
                  <FileText className="w-5 h-5 mr-3" />
                  Download Complete PDF
                </button>
                <button 
                  onClick={() => setReadingItem(null)}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
