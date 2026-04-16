import { Mail, Phone, MapPin, Send } from "lucide-react";
import { HomeData } from "@/types";

interface ContactProps {
  data: HomeData["contactTeaser"];
}

export default function ContactUsSection({ data }: ContactProps) {
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
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2 sm:col-span-1">
                     <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jane" />
                   </div>
                   <div className="col-span-2 sm:col-span-1">
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                   </div>
                </div>
                
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                   <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="jane@example.com" />
                </div>
                
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                   <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can we collaborate?"></textarea>
                </div>
                
                <button type="button" className="group flex items-center justify-center w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#7a4812] hover:shadow-lg transition-all mt-2">
                  Send Message
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
