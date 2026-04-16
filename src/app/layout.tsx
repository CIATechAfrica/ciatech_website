import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/blocks/Header";
import Footer from "@/components/blocks/Footer";
import { homeData } from "../../content/home";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header navLinks={homeData.footer.links} primaryCTA={homeData.cta.primaryCTA} />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer data={homeData.footer} />
      </body>
    </html>
  );
}
