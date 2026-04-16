import { ResearchPageData } from "@/types";

export const researchData: ResearchPageData = {
  seo: { 
    title: "Research & Insights | CIATECH Africa", 
    description: "Explore CIATECH’s data-driven publications shaping policy, technology, and economic empowerment across Africa." 
  },
  hero: { 
    heading: "Data-Driven Intelligence", 
    subtext: "We publish rigorous, open-source research and policy frameworks to guide institutions building the African tech ecosystem.",
    imageRef: "/images/hero.png" // Fallback
  },
  featured: {
    id: "kanuri-ai-whitepaper",
    title: "Kanuri AI: The Blueprint for Linguistic Digital Inclusion",
    summary: "An exclusive deep-dive into the architectural framework and socio-economic rationale behind Kanuri AI. This paper dictates how to build sovereign offline-first Language Learning Models for marginalized populations.",
    category: "AI & Infrastructure",
    date: "April 2026",
    imageRef: "/images/about.png",
    pdfUrl: "#"
  },
  publicationsTitle: "The Intelligence Database",
  publications: [
    { 
      id: "agritech-ecosystem-2024", 
      title: "Africa Agritech Ecosystem Report",
      summary: "A comprehensive analysis of how IoT and Climate Tech are transforming the supply chains in the Lake Chad region.",
      category: "Agritech",
      date: "February 2026",
      imageRef: "/images/new_hero.png",
      pdfUrl: "#"
    },
    { 
      id: "renewable-policy", 
      title: "Renewable Energy Policy Frameworks",
      summary: "Strategic guidelines for governments integrating decentralized solar grids to support SME manufacturing.",
      category: "Climate & Policy",
      date: "January 2026",
      imageRef: "/images/hero.png",
      pdfUrl: "#"
    },
    { 
      id: "digital-currencies", 
      title: "Digital Currencies in Sub-Saharan Africa",
      summary: "Evaluating the adoption curves of Central Bank Digital Currencies (CBDCs) and their impact on cross-border micro-trade.",
      category: "Fintech",
      date: "November 2025",
      imageRef: "/images/about.png",
      pdfUrl: "#"
    },
    { 
      id: "urban-gig-economy", 
      title: "Urban Tech Hubs and the Gig Economy",
      summary: "Tracking the shift from informal labor to structured digital freelance work driven by skill acquisition programs.",
      category: "Workforce",
      date: "August 2025",
      imageRef: "/images/new_hero.png",
      pdfUrl: "#"
    }
  ]
};
