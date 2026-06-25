import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import PopupManager from "@/components/blocks/PopupManager";
import { homeData } from "../../../content/home";
import { client } from "@/sanity/lib/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIATECH Africa",
  description: "Building the Next Generation of African Innovators",
};

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  if (!['en', 'fr'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  let mainNavigation = homeData.headerLinks;

  try {
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);
    if (siteSettings && siteSettings.mainNavigation) {
      mainNavigation = siteSettings.mainNavigation.map((item: any) => ({
        label: item.label,
        href: item.href,
        subLinks: item.dropdown?.map((sub: any) => ({
          label: sub.label,
          href: sub.href
        }))
      }));
    }
  } catch (err) {
    console.warn("Failed to fetch site settings due to network timeout.");
  }

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-white">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LayoutWrapper 
            navLinks={mainNavigation} 
            primaryCTA={homeData.cta.primaryCTA} 
            footerData={homeData.footer}
          >
            {children}
          </LayoutWrapper>
          <PopupManager />
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
