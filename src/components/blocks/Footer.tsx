"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HomeData } from "@/types";
import { submitNewsletter } from "@/app/actions";
import { Loader2, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ReactNode> = {
  "linkedin": <FaLinkedin className="w-5 h-5" />,
  "x": <FaXTwitter className="w-5 h-5" />,
  "facebook": <FaFacebook className="w-5 h-5" />,
  "instagram": <FaInstagram className="w-5 h-5" />,
  "tiktok": <FaTiktok className="w-5 h-5" />,
  "snapchat": <FaSnapchatGhost className="w-5 h-5" />
};

interface FooterProps {
  data: HomeData["footer"];
}

export default function Footer({ data }: FooterProps) {
  const t = useTranslations("Footer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    const result = await submitNewsletter(formData);
    
    if (result.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 pr-4">
            <div className="relative w-48 h-12 mb-6">
              <Image 
                 src="/logo.png" 
                 alt="CIATECH Logo" 
                 fill 
                 className="object-contain object-left" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              {data.mission}
            </p>
            
            <div className="flex gap-4">
              {data.socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1"
                >
                  {iconMap[social.iconName]}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white tracking-wide mb-6">{t("quick_links")}</h4>
            <ul className="space-y-3">
              {data.links.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-secondary transition-colors inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Details Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white tracking-wide mb-6">{t("contact_us")}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {data.address && <li className="leading-relaxed">{data.address}</li>}
              {data.email && <li>
                <a href={`mailto:${data.email}`} className="hover:text-white transition-colors">
                  {data.email}
                </a>
              </li>}
              {data.phone && <li>
                <a href={`tel:${data.phone}`} className="hover:text-white transition-colors">
                  {data.phone}
                </a>
              </li>}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white tracking-wide mb-6">{t("stay_updated")}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("newsletter_text")}
            </p>
            
            <form className="relative flex flex-col sm:flex-row gap-3 sm:gap-0 mt-2" onSubmit={handleSubscribe}>
              <input 
                 type="email" 
                 name="email"
                 placeholder={t("email_placeholder")}
                 className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all shadow-inner"
                 required
              />
              <button 
                type="submit" 
                disabled={isSubmitting || status === 'success'}
                className="sm:absolute sm:right-1.5 sm:top-1.5 sm:bottom-1.5 bg-secondary text-primary font-bold px-6 py-2.5 rounded-full text-sm hover:bg-white transition-colors shadow-[0_0_15px_-3px_rgba(226,173,0,0.3)] disabled:opacity-80 flex items-center justify-center min-w-[120px]"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin mr-2" /> {t("subscribing")}</>
                ) : status === 'success' ? (
                  <><CheckCircle className="w-4 h-4 mr-2" /> {t("subscribed")}</>
                ) : (
                  t("subscribe")
                )}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-red-400 text-xs mt-3 ml-2">{t("subscribe_error")}</p>
            )}
          </div>
          
        </div>
        
        {/* Bottom Copyright Stripe */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} CIATECH Africa. {t("rights")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t("cookie")}</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
