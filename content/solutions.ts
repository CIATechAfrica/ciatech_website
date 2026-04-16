import { SolutionsPageData } from "@/types";

export const solutionsData: SolutionsPageData = {
  seo: {
    title: "Our Solutions | CIATECH Africa",
    description: "Discover our core solutions: Innovation & Venture Development, AI for Development (AI4D), and Financial Inclusion systems."
  },
  hero: {
    heading: "Systems For Scale",
    subtext: "We architect and deploy inclusive, technology-enabled infrastructures designed specifically for Africa’s frontier markets.",
    imageRef: "/images/hero.png" // Fallback hero image
  },
  introTitle: "Solutions",
  introSubtext: "Our methodologies don't just solve immediate problems—they establish resilient digital ecosystems.",
  solutions: [
    {
      id: "innovation-venture",
      title: "Innovation & Venture Development Systems",
      description: "We are an engine for local tech ecosystems. We identify, incubate, and scale high-impact startups that are solving the region's most critical challenges.",
      features: [
        "Rigorous startup incubation and acceleration programs",
        "End-to-end product development and rapid prototyping",
        "Investment readiness training and direct funding linkages"
      ],
      iconName: "rocket",
      imageRef: "/images/new_hero.png"
    },
    {
      id: "ai4d",
      title: "AI for Development (AI4D)",
      description: "Artificial Intelligence must speak the language of those it serves. We design highly inclusive AI systems tailored to low-resource communities and indigenous languages.",
      features: [
        "Pioneering Indigenous Language AI models (e.g., Kanuri AI)",
        "Voice-to-text data systems bridging the digital literacy divide",
        "Specialized AI deployment for Agriculture, Health, and Education sectors"
      ],
      iconName: "brain-circuit",
      imageRef: "/images/about.png"
    },
    {
      id: "financial-inclusion",
      title: "Financial Inclusion & Digital Economy",
      description: "Economic participation requires digital identity and secure infrastructure. We expand access to capital through powerful fintech innovation pipelines.",
      features: [
        "Unbanked integration via Digital Payments and Secure Identity",
        "SME structured financing pipelines and credit scoring",
        "Grassroots financial literacy and inclusion campaigns"
      ],
      iconName: "landmark",
      imageRef: "/images/hero.png"
    },
    {
      id: "workforce-development",
      title: "Workforce Development Systems",
      description: "We build end-to-end pathways from learning to earning. Our model is built around future-proofing the talent pipeline.",
      features: [
        "Skills training (AI, Cloud, Data, Cybersecurity)",
        "Certification & mentorship",
        "Job placement and entrepreneurship support"
      ],
      iconName: "graduation-cap",
      imageRef: "/images/new_hero.png" // Fallback or updated later
    },
    {
      id: "trade-market-systems",
      title: "Trade & Market Systems Development",
      description: "We support expanding SMEs to access regional and international markets, driving economic sustainability.",
      features: [
        "AfCFTA-aligned trade readiness",
        "Cross-border trade (Lake Chad region)",
        "Women-led export development"
      ],
      iconName: "globe",
      imageRef: "/images/about.png" // Fallback or updated later
    }
  ],
  cta: {
    heading: "Deploy A System With Us",
    subtext: "Ready to scale inclusive technological infrastructure? We want to hear about your mission.",
    primaryCTA: { label: "Contact Our Architects", href: "/contact" }
  }
};
