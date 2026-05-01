import { GalleryPageData } from "@/types";

export const galleryData: GalleryPageData = {
  seo: {
    title: "Visual Gallery | CIATECH Africa",
    description: "Explore the visual record of our impact across infrastructure deployments, research fieldwork, and partnership summits."
  },
  hero: {
    heading: "The Visual Record",
    subtext: "Documenting our structural deployments and the people driving the African technology ecosystem forward.",
    imageRef: "/images/hero.png" // Fallback hero image
  },
  gridTitle: "Deployment Archive",
  images: [
    {
      id: "gal-1",
      title: "Solar Grid Commissioning",
      location: "Maiduguri, Nigeria",
      date: "August 2025",
      imageRef: "/images/hero.png",
      gridSize: "col-span-1 md:col-span-2"
    },
    {
      id: "gal-2",
      title: "Workforce Training Cohort",
      location: "Abuja HQ",
      date: "November 2025",
      imageRef: "/images/about.png",
      gridSize: "col-span-1"
    },
    {
      id: "gal-3",
      title: "Agritech Field Deployment",
      location: "Lake Chad Region",
      date: "January 2026",
      imageRef: "/images/new_hero.png",
      gridSize: "col-span-1"
    },
    {
      id: "gal-4",
      title: "Cross-Border Infrastructure Summit",
      location: "Nairobi, Kenya",
      date: "March 2026",
      imageRef: "/images/hero.png",
      gridSize: "col-span-1 md:col-span-2"
    },
    {
      id: "gal-5",
      title: "Kanuri AI Linguistics Team",
      location: "Hybrid / Remote",
      date: "April 2026",
      imageRef: "/images/new_hero.png",
      gridSize: "col-span-1 lg:col-span-3"
    }
  ]
};
