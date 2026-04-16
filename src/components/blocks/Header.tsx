"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkRef } from "@/types";

interface HeaderProps {
  navLinks: LinkRef[];
  primaryCTA: LinkRef;
}

export default function Header({ navLinks, primaryCTA }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <nav className="hidden xl:flex items-center space-x-1 pl-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className={`relative px-4 py-2 hover:text-primary transition-colors font-bold text-sm group ${isActive ? "text-primary" : "text-gray-700"}`}
                >
                  {link.label}
                  <span className={`absolute inset-x-4 -bottom-1 h-0.5 bg-secondary transition-transform origin-left duration-300 rounded-full ${isActive ? "transform scale-x-100" : "transform scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>
          
          {/* Action Button & Hamburger */}
          <div className="flex items-center justify-end flex-grow sm:flex-grow-0 ml-4 gap-4">
            <Link 
              href={primaryCTA.href}
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
        <div className="absolute top-[80px] left-0 w-full px-4 sm:px-6 lg:px-8 xl:hidden">
          <div className="bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-2xl rounded-[2rem] p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0 ${isActive ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-gray-100 md:hidden flex justify-center shrink-0">
              <Link 
                href={primaryCTA.href}
                onClick={() => setIsMobileMenuOpen(false)}
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
