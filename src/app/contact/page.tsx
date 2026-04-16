"use client";

import { contactData } from "../../../content/contact";
import { MapPin, Mail, ArrowUpRight, Send, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Partnership Portal
            </h3>
            <span className="w-12 h-px bg-secondary opacity-50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight break-words hyphens-auto">
            {contactData.hero.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            {contactData.hero.subtext}
          </p>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="relative -mt-16 z-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Metadata (Hubs & Endpoints) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Global Hubs */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">{contactData.basesTitle}</h3>
              </div>
              <div className="space-y-8">
                {contactData.bases.map(base => (
                  <div key={base.id} className="group">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {base.type}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {base.city}, {base.country}
                    </h4>
                    <div className="flex items-start text-gray-600 gap-2">
                      <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="font-light">{base.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Endpoints */}
            <div className="bg-gray-900 rounded-[2rem] p-8 sm:p-10 border border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-8">{contactData.endpointsTitle}</h3>
                <div className="space-y-8">
                  {contactData.endpoints.map(endpoint => (
                    <div key={endpoint.id} className="group">
                      <h4 className="text-lg font-bold text-white mb-2">{endpoint.department}</h4>
                      <p className="text-gray-400 font-light mb-3 text-sm">{endpoint.description}</p>
                      <a href={`mailto:${endpoint.email}`} className="inline-flex items-center text-primary font-bold hover:text-white transition-colors group">
                        <Mail className="w-4 h-4 mr-2" />
                        {endpoint.email}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Floating Application UI */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 border border-gray-100 shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
              
              <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 tracking-tight">Deploy a Proposal</h2>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  Use this secure portal to route architectural schematics, partnership proposals, or investment inquiries directly to our command center.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 rounded-[2rem] border border-gray-100 h-full">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Transmission Received</h3>
                  <p className="text-gray-600 max-w-sm font-light">
                    Your proposition has been routed to the appropriate CIATech department. We will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Representative Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Professional Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="jane@organization.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Organization / Entity</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="Organization Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Routing</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900 appearance-none cursor-pointer"
                        >
                          <option value="policy">Government & Policy</option>
                          <option value="capital">Investor Inquiry</option>
                          <option value="press">Press & Media</option>
                          <option value="general">General Support</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Proposition Details</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900 resize-none"
                      placeholder="Outline your deployment objectives, data requests, or partnership scope here..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-all duration-300 group shadow-[0_4px_14px_0_rgba(17,24,39,0.1)] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)] hover:-translate-y-1 active:translate-y-0"
                  >
                    <span>Transmit Proposal</span>
                    <ArrowUpRight className="w-5 h-5 ml-3 transform group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
