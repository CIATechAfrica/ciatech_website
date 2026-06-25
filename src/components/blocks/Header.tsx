"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavItem, LinkRef } from "@/types";

interface HeaderProps {
  navLinks: NavItem[];
  primaryCTA: LinkRef;
}

export default function Header({ navLinks, primaryCTA }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      const targetId = href.startsWith("/") ? href.slice(1) : href;
      const el = document.getElementById(targetId);
      
      if (el) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // Close mobile menu regardless
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-6 w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48 h-12 transform transition-transform duration-300 hover:scale-105">
              <Image src="/logo.png" alt="CIAtech Logo" fill className="object-contain object-left" priority />
            </div>
          </Link>
          
          {/* Top-Level Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center space-x-2 pl-4">
            {navLinks.map((link) => {
              const hasSubLinks = link.subLinks && link.subLinks.length > 0;
              const isActive = link.href ? pathname === link.href : link.subLinks?.some(sub => pathname === sub.href);
              
              return (
                <div key={link.label} className="relative group">
                  {hasSubLinks ? (
                    <button className={`flex items-center gap-1 px-4 py-2 hover:text-primary transition-colors font-bold text-sm ${isActive ? "text-primary" : "text-gray-700"}`}>
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href || "#"}
                      onClick={(e) => link.href && handleNavClick(e, link.href)}
                      className={`relative flex items-center px-4 py-2 hover:text-primary transition-colors font-bold text-sm ${isActive ? "text-primary" : "text-gray-700"}`}
                    >
                      {link.label}
                      <span className={`absolute inset-x-4 -bottom-1 h-0.5 bg-secondary transition-transform origin-left duration-300 rounded-full ${isActive ? "transform scale-x-100" : "transform scale-x-0 group-hover:scale-x-100"}`} />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasSubLinks && (
                    <div className="absolute left-0 top-full pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-2 min-w-[200px] flex flex-col gap-1">
                        {link.subLinks!.map(sub => (
                          <Link 
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleNavClick(e, sub.href)}
                            className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === sub.href ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'}`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Action Button & Hamburger */}
          <div className="flex items-center justify-end flex-grow sm:flex-grow-0 ml-4 gap-4">
            {/* Language Toggle */}
            <Link
              href={pathname.replace(`/${pathname.split('/')[1]}`, `/${pathname.split('/')[1] === 'en' ? 'fr' : 'en'}`)}
              className="px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 font-bold text-xs hover:bg-gray-100 transition-colors border border-gray-200 uppercase tracking-widest hidden sm:flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              {pathname.split('/')[1] === 'en' ? 'FR' : 'EN'}
            </Link>

            <Link 
              href={primaryCTA.href}
              onClick={(e) => handleNavClick(e, primaryCTA.href)}
              className="hidden md:flex px-7 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-[#7a4812] hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-transparent hover:border-secondary/20"
            >
              {primaryCTA.label}
            </Link>
            
            {/* Mobile Nav Toggle */}
            <button 
              className="xl:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile/Tablet Vertical Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full px-4 sm:px-6 lg:px-8 xl:hidden z-50">
          <div className="bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-2xl rounded-[2rem] p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navLinks.map((link) => {
              const hasSubLinks = link.subLinks && link.subLinks.length > 0;
              const isExpanded = expandedMobileItem === link.label;
              const isActive = link.href ? pathname === link.href : link.subLinks?.some(sub => pathname === sub.href);

              return (
                <div key={link.label} className="flex flex-col">
                  {hasSubLinks ? (
                    <button 
                      onClick={() => setExpandedMobileItem(isExpanded ? null : link.label)}
                      className={`flex items-center justify-between text-base font-bold px-4 py-3 rounded-xl transition-colors shrink-0 ${isActive || isExpanded ? "bg-primary/5 text-primary" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link 
                      href={link.href || "#"}
                      onClick={(e) => link.href && handleNavClick(e, link.href)}
                      className={`text-base font-bold px-4 py-3 rounded-xl transition-colors shrink-0 ${isActive ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mobile Submenu Accordion */}
                  {hasSubLinks && isExpanded && (
                    <div className="flex flex-col gap-1 pl-4 pr-2 py-2 mt-1 border-l-2 border-gray-100 ml-4 animate-in slide-in-from-top-2 duration-300">
                      {link.subLinks!.map(sub => (
                        <Link 
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleNavClick(e, sub.href)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${pathname === sub.href ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="pt-3 mt-1 border-t border-gray-100 md:hidden flex justify-center shrink-0">
              <Link 
                href={primaryCTA.href}
                onClick={(e) => handleNavClick(e, primaryCTA.href)}
                className="w-full text-center px-7 py-3 rounded-xl bg-primary text-white font-bold text-base hover:bg-[#7a4812] transition-colors shadow-md"
              >
                {primaryCTA.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
