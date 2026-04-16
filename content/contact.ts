import { ContactPageData } from "@/types";

export const contactData: ContactPageData = {
  seo: {
    title: "Partnership Portal & Contact | CIATECH Africa",
    description: "Connect with our global operations base to deploy strategic regional infrastructures."
  },
  hero: {
    heading: "Initialize Partnership",
    subtext: "Submit rigorous deployment propositions, request data architectures, or contact our regional operations hubs directly.",
    imageRef: "/images/hero.png" // Fallback hero
  },
  basesTitle: "Global Operations Hub",
  bases: [
    {
      id: "hq-maiduguri",
      city: "Maiduguri",
      country: "Nigeria",
      address: "Maiduguri, Borno State, Nigeria",
      type: "Global Headquarters"
    }
  ],
  endpointsTitle: "Direct Endpoints",
  endpoints: [
    {
      id: "gov-relations",
      department: "Government & Policy Relations",
      description: "For state actors, regulatory alignment, and policy formulation frameworks.",
      email: "policy@ciatech.africa"
    },
    {
      id: "investor-relations",
      department: "Capital & Investor Relations",
      description: "For limited partners, sovereign funds, and grant syndicates.",
      email: "capital@ciatech.africa"
    },
    {
      id: "general-inquiries",
      department: "General Intake",
      description: "For ecosystem general queries, technical support, and career follow-ups.",
      email: "info@ciatech.africa"
    }
  ]
};
