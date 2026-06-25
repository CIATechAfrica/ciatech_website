"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface PopupSettings {
  isActive: boolean;
  popupImage: any;
  altText?: string;
  targetLink?: string;
}

export default function PopupManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<PopupSettings | null>(null);

  useEffect(() => {
    async function fetchPopup() {
      try {
        const data = await client.fetch<PopupSettings>(`*[_type == "popupSettings"][0]`);
        if (data && data.isActive && data.popupImage) {
          // Check session storage
          const dismissed = sessionStorage.getItem("ciatech_popup_dismissed");
          if (!dismissed) {
            setSettings(data);
            setIsOpen(true);
          }
        }
      } catch (err) {
        // Suppress console.error to avoid Next.js dev overlay on network timeout
        console.warn("Popup settings fetch skipped due to network timeout.");
      }
    }
    fetchPopup();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("ciatech_popup_dismissed", "true");
  };

  if (!isOpen || !settings || !settings.popupImage) return null;

  const builder = urlForImage(settings.popupImage);
  if (!builder) return null;
  
  const imageUrl = builder.width(800).url();

  const ImageComponent = (
    <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden">
      <Image 
        src={imageUrl} 
        alt={settings.altText || "Promotional Popup"} 
        fill 
        className="object-cover"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-2 sm:p-3 animate-in zoom-in-95 duration-300">
        <button 
          onClick={handleClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {settings.targetLink ? (
          <Link href={settings.targetLink} onClick={handleClose} className="block w-full h-full">
            {ImageComponent}
          </Link>
        ) : (
          ImageComponent
        )}
      </div>
    </div>
  );
}
