"use client";

import { blogData } from "../../../content/blog";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, X, Clock, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { BlogPost } from "@/types";

export default function BlogPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Combine all posts to allow seamless modal navigation
  const allPosts = [blogData.featuredPost, ...blogData.posts];
  const activeArticle = activeIndex !== null ? allPosts[activeIndex] : null;

  const showNext = () => {
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === allPosts.length - 1 ? 0 : activeIndex + 1);
    }
  };

  const showPrev = () => {
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === 0 ? allPosts.length - 1 : activeIndex - 1);
    }
  };

  // Keyboard support for reading flow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Newsroom
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {blogData.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            {blogData.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. FEATURED POST TENTPOLE */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div 
          onClick={() => setActiveIndex(0)}
          className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 cursor-pointer flex flex-col lg:flex-row hover:-translate-y-2 transition-all duration-500"
        >
          {/* Featured Image */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
            <Image 
              src={blogData.featuredPost.thumbnailRef}
              alt={blogData.featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                Featured Dispatch
              </span>
            </div>
          </div>

          {/* Featured Content Area */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {blogData.featuredPost.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {blogData.featuredPost.readTime}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors duration-300">
              {blogData.featuredPost.title}
            </h2>
            
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              {blogData.featuredPost.snippet}
            </p>

            <div className="mt-auto flex items-center text-primary font-bold">
              Read Full Article 
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ml-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHRONOLOGICAL FEED LAYOUT */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-16">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">
              {blogData.feedTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogData.posts.map((post, index) => (
              <div 
                key={post.id} 
                onClick={() => setActiveIndex(index + 1)} // +1 because index 0 is featuredPost
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              >
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1 ml-2" /> {post.readTime}</span>
                </div>
                
                <h4 className="text-2xl font-black text-gray-900 tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                  {post.snippet}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900">{post.author}</span>
                  <button className="text-gray-400 group-hover:text-primary transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto w-full h-full">
          {/* Cinematic Blur Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveIndex(null)}
          />

          <div className="relative bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden my-auto translate-y-0 transform transition-all h-auto max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex justify-between items-center sticky top-0 z-20 shrink-0">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                <BookOpen className="w-4 h-4 text-primary" /> CIATech Newsroom 
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={showPrev}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors shadow-sm"
                  title="Previous Dispatch"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={showNext}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors shadow-sm"
                  title="Next Dispatch"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="w-px h-6 bg-gray-200 mx-2" />
                <button 
                  onClick={() => setActiveIndex(null)}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-900 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors shadow-sm"
                  title="Close Reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrolling Body */}
            <div className="overflow-y-auto p-0 flex-grow relative">
              <div className="relative w-full h-[300px] sm:h-[400px]">
                <Image 
                  src={activeArticle.thumbnailRef}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-300 mb-4">
                    <span>{activeArticle.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{activeArticle.readTime}</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>

              <div className="p-8 sm:p-12 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{activeArticle.author}</div>
                    <div className="text-sm text-gray-500">Official CIATech Dispatch</div>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none prose-p:mb-6 prose-p:text-lg">
                  <p className="first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                    {activeArticle.content}
                  </p>
                  <p>
                    <em>As we continue to accelerate our deployment pipelines, check back frequently for real-time engineering and policy updates. CIATech remains committed to absolute transparency across our operational grid.</em>
                  </p>
                </div>

                <div className="mt-16 flex justify-center gap-4">
                  <button 
                    onClick={showPrev}
                    className="inline-flex justify-center items-center px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" /> Previous
                  </button>
                  <button 
                    onClick={() => setActiveIndex(null)}
                    className="inline-flex justify-center items-center px-10 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-primary transition-colors shadow-md"
                  >
                    Return to Feed
                  </button>
                  <button 
                    onClick={showNext}
                    className="inline-flex justify-center items-center px-6 py-4 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Next <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
