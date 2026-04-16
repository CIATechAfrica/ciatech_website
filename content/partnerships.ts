import { PartnershipPageData } from "@/types";

export const partnershipsData: PartnershipPageData = {
  seo: {
    title: "Partnerships | CIATECH Africa",
    description: "Discover how CIATECH Africa collaborates with leading global organizations to co-create scalable solutions."
  },
  hero: {
    heading: "Collaborating for Global Scale",
    subtext: "Our partnership model is built on co-creation, shared value, and massively scalable impact across Africa.",
    imageRef: "/images/hero.png" // Safe placeholder
  },
  modelsTitle: "How We Collaborate",
  modelsSubtext: "We don't just sign MOUs. We build deeply integrated systems with our partners across four key verticals.",
  models: [
    {
      id: "gov",
      category: "Government Institutions",
      description: "We co-design policy frameworks and deploy digital public infrastructure that modernizes civic systems.",
      iconName: "landmark"
    },
    {
      id: "un",
      category: "Multilateral & UN Agencies",
      description: "We implement high-impact, data-driven interventions aligned with the Sustainable Development Goals (SDGs).",
      iconName: "globe-2"
    },
    {
      id: "academia",
      category: "Academic Institutions",
      description: "We bridge the gap between theoretical research and market-ready indigenous technology deployment.",
      iconName: "book-open"
    },
    {
      id: "private",
      category: "Private Ecosystems",
      description: "We act as local implementers and scaling vehicles for global tech giants entering frontier markets.",
      iconName: "briefcase"
    }
  ],
  directoryTitle: "The Global Network",
  directorySubtext: "A categorized directory of the organizations actively powering the CIATECH ecosystem.",
  directory: [
    {
      category: "Multilateral Partners",
      description: "Agencies funding and guiding systemic development.",
      logos: [
        { id: "1", name: "UN Partner 1", imageRef: "/images/partners/partner-1.png" },
        { id: "2", name: "UN Partner 2", imageRef: "/images/partners/partner-2.png" }
      ]
    },
    {
      category: "Government & Civic Institutions",
      description: "Public sector entities utilizing our infrastructure.",
      logos: [
        { id: "3", name: "Gov Hub", imageRef: "/images/partners/partner-1.png" },
        { id: "4", name: "Ministry", imageRef: "/images/partners/partner-2.png" }
      ]
    },
    {
      category: "Private Sector Leaders",
      description: "Technology and corporate partners driving ecosystem innovation.",
      logos: [
        { id: "5", name: "Tech Giant", imageRef: "/images/partners/partner-3.png" },
        { id: "6", name: "Investment Firm", imageRef: "/images/partners/partner-4.png" }
      ]
    }
  ],
  cta: {
    heading: "Join The Ecosystem",
    subtext: "Are you interested in deploying technology at a massive scale? Let's talk about what we can build together.",
    button: { label: "Become a Partner", href: "/contact" }
  }
};
