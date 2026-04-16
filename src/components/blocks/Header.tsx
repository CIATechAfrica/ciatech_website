"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkRef } from "@/types";

interface HeaderProps {
  navLinks: LinkRef[];
  primaryCTA: LinkRef;
}

export default function Header({ navLinks, primaryCTA }: HeaderProps) {
  const pathname = usePathname();

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
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 pl-4">
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
          
          {/* Action Button */}
          <div className="hidden md:flex items-center ml-4">
            <Link 
              href={primaryCTA.href}
              className="px-7 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-[#7a4812] hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-transparent hover:border-secondary/20"
            >
              {primaryCTA.label}
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}
