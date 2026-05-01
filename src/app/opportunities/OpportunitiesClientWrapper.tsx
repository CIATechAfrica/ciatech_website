"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Briefcase, Lightbulb, X, UploadCloud, CheckCircle2 } from "lucide-react";
import { OpenRole } from "@/types";

function RoleCard({ role, icon: Icon, onApply }: { role: OpenRole; icon: React.ElementType; onApply: () => void }) {
  return (
    <div className="group bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex flex-wrap gap-3 mb-6 relative z-10">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest">
          <Briefcase className="w-3.5 h-3.5 mr-2 text-primary" />
          {role.type}
        </span>
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 mr-2 text-primary" />
          {role.location}
        </span>
      </div>

      <div className="flex items-start gap-5 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
          {role.title}
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed font-light mb-8 flex-grow relative z-10">
        {role.description}
      </p>

      <div className="mt-auto relative z-10 border-t border-gray-50 pt-6">
        <button 
          onClick={onApply}
          className="inline-flex items-center w-full justify-between px-6 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-all duration-300 group/btn shadow-[0_4px_14px_0_rgba(17,24,39,0.1)] hover:shadow-[0_4px_14px_0_rgba(142,85,22,0.4)]"
        >
          <span>Submit Application</span>
          <ArrowUpRight className="w-5 h-5 transform group-hover/btn:rotate-45 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default function OpportunitiesClientWrapper({ data }: { data: any }) {
  const [selectedRole, setSelectedRole] = useState<OpenRole | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleApplyClick = (role: OpenRole) => {
    setSelectedRole(role);
    setIsSubmitted(false);
    setFileName(null);
  };

  const closeModal = () => {
    setSelectedRole(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit the FormData to a backend payload here.
    setIsSubmitted(true);
    // Auto-close modal after 3 seconds showing the success view.
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 font-sans selection:bg-secondary/30 selection:text-gray-900 overflow-x-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50" />
            <h3 className="text-secondary font-bold tracking-widest uppercase text-xs">
              Opportunities
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

      {/* 2. FELLOWSHIPS GRID */}
      {data.fellowships.length > 0 && (
        <section className="relative -mt-16 z-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="mb-12 border-b border-gray-200 pb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/50 backdrop-blur-xl p-8 rounded-[2rem] border-x border-t shadow-sm">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                {data.fellowshipsTitle}
              </h2>
              <p className="text-gray-600 max-w-2xl font-light">
                {data.fellowshipsSubtext}
              </p>
            </div>
            <div className="hidden lg:block w-32 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.fellowships.map((role: OpenRole) => (
              <RoleCard key={role._id || role.id} role={role} icon={Lightbulb} onApply={() => handleApplyClick(role)} />
            ))}
          </div>
        </section>
      )}

      {/* 3. CAREERS GRID */}
      {data.careers.length > 0 && (
        <section className="bg-gray-100 py-24 sm:py-32 border-t border-gray-200">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                {data.careersTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {data.careersSubtext}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.careers.map((role: OpenRole) => (
                <RoleCard key={role._id || role.id} role={role} icon={Briefcase} onApply={() => handleApplyClick(role)} />
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. THE APPLICATION MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto w-full h-full">
          {/* Cinematic Blur Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          />

          <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden my-auto translate-y-0 transform transition-all">
            
            {/* Modal Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-8 py-6 flex justify-between items-center sticky top-0 z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Application Portal
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  {selectedRole.title}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form state processing */}
            <div className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Application Received</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for your interest. Our talent acquisition team will review your profile shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">LinkedIn / Portfolio URL</label>
                      <input 
                        type="url" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Category / Department</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900 appearance-none"
                        >
                          <option value="" disabled selected>Select an area...</option>
                          <option value="engineering">Engineering & Technology</option>
                          <option value="policy">Policy & Research</option>
                          <option value="operations">Operations & Strategy</option>
                          <option value="marketing">Marketing & Communications</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UI Custom File Upload (PDF Only) */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Upload Resume/CV (PDF Only)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept="application/pdf"
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        title="Upload PDF Resume"
                      />
                      <div className={`w-full px-5 py-4 rounded-xl border-2 border-dashed flex items-center gap-4 transition-all ${fileName ? 'bg-primary/5 border-primary/30 text-primary' : 'bg-gray-50 border-gray-200 hover:border-gray-400 text-gray-500'}`}>
                        <UploadCloud className="w-6 h-6 flex-shrink-0" />
                        <span className="truncate font-medium">
                          {fileName ? fileName : "Drag & drop or browse for PDF..."}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Brief Pitch</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all text-gray-900 resize-none"
                      placeholder="Why are you a perfect fit for this specific execution role?"
                    />
                  </div>

                  <div className="pt-4 flex justify-end gap-4 border-t border-gray-100">
                    <button 
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-8 py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-primary transition-all shadow-md active:scale-95"
                    >
                      Submit Profile
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
