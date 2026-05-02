"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { HomeData } from "@/types";
import { submitContactForm } from "@/app/actions";

interface ContactProps {
  data: HomeData["contactTeaser"];
}

export default function ContactUsSection({ data }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!data) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } else {
      setSubmitStatus('error');
      setErrorMessage(result.error || 'Failed to submit form.');
    }
    
    setIsSubmitting(false);
  };

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
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
              
              {submitStatus === 'success' && (
                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our team will review your proposition and respond shortly.</p>
                </div>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm flex items-start gap-3">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Representative Name</label>
                     <input type="text" name="name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="Jane Doe" required />
                   </div>
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Professional Email</label>
                     <input type="email" name="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="jane@organization.com" required />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-px">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Organization / Entity</label>
                     <input type="text" name="company" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" placeholder="Organization Name" required />
                   </div>
                   <div className="space-y-px relative">
                     <label className="block text-sm font-semibold text-gray-700 mb-1">Select Routing</label>
                     <div className="relative">
                       <select name="subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 appearance-none cursor-pointer" required>
                         <option value="Government & Policy">Government & Policy</option>
                         <option value="Investor Inquiry">Investor Inquiry</option>
                         <option value="Press & Media">Press & Media</option>
                         <option value="General Support">General Support</option>
                       </select>
                       <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                         <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>
                     </div>
                   </div>
                </div>
                
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-1">Proposition Details</label>
                   <textarea name="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-gray-900" placeholder="Outline your objectives or partnership scope here..." required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex items-center justify-center w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#7a4812] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)] transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Transmitting...</>
                  ) : (
                    <>Transmit Proposal <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
