"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { HomeData } from "@/types";

interface ContactProps {
  data: HomeData["contactTeaser"];
}

export default function ContactUsSection({ data }: ContactProps) {
  if (!data) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Card Housing */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-gray-200/50 shadow-sm overflow-hidden relative">
          
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                {data.heading}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {data.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700">{data.email}</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-gray-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700">{data.phone}</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-gray-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700">{data.address}</span>
                </div>
              </div>
            </div>
            
            {/* Right: The Form Block */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Representative Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="Jane Doe" required />
                   </div>
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Professional Email</label>
                     <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="jane@organization.com" required />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Organization / Entity</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="Organization Name" required />
                   </div>
                   <div className="space-y-px relative">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Select Routing</label>
                     <div className="relative">
                       <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 appearance-none cursor-pointer" required>
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
                
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-1">Proposition Details</label>
                   <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-gray-900" placeholder="Outline your objectives or partnership scope here..." required></textarea>
                </div>
                
                <button type="submit" className="group flex items-center justify-center w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#7a4812] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)] transition-all mt-2">
                  Transmit Proposal
                  <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
