import { ImpactPageData } from "@/types";

export const impactData: ImpactPageData = {
  seo: {
    title: "Our Impact | CIATECH Africa",
    description: "Discover the measurable impact of CIATECH across economic empowerment, digital inclusion, and community resilience in Africa."
  },
  hero: {
    heading: "Metrics of Transformation",
    subtext: "Impact isn't abstract. It is the measurable elevation of human capital, economic activity, and digital sovereignty across the local communities we serve.",
    imageRef: "/images/hero.png" // Fallback hero
  },
  introTitle: "The Scale of Our Core Operations",
  introSubtext: "We track robust outcome indicators to ensure our systems deliver profound, systemic change.",
  stats: [
    { id: "women", value: "2,000+", label: "Women Economically Empowered", iconName: "heart-handshake" },
    { id: "individuals", value: "5,000+", label: "Individuals Equipped with Skills", iconName: "globe-2" },
    { id: "startups", value: "50+", label: "Startups Incubated & Supported", iconName: "rocket" },
    { id: "partnerships", value: "15", label: "Strategic Sector Partnerships", iconName: "handshake" },
    { id: "programs", value: "4", label: "Large-Scale Programs Implemented", iconName: "layers" }
  ],
  areasTitle: "Strategic Impact Areas",
  impactAreas: [
    {
      id: "economic-empowerment",
      title: "Economic Empowerment",
      description: "We are actively shifting thousands of small-scale entrepreneurs and marginalized demographics into the formal digital economy, securing their long-term financial resilience.",
      methodology: [
        "Implementing high-yield startup accelerators.",
        "Facilitating access to regional market capital.",
        "Providing digital bookkeeping and financial literacy structures."
      ],
      iconName: "landmark"
    },
    {
      id: "digital-inclusion",
      title: "Digital Inclusion & Infrastructure",
      description: "Technology is only transformative if it is accessible. We break down the barriers preventing local demographics from participating in the modern web.",
      methodology: [
        "Pioneering Indigenous local language AI structures.",
        "Building offline-first data applications for remote areas.",
        "Establishing rigorous technical skill bootcamps for local youth."
      ],
      iconName: "laptop"
    },
    {
      id: "climate-resilience",
      title: "Climate & Agricultural Resilience",
      description: "Our technology interventions empower rural farmers and communities to sustainably adapt to climate disruptions and optimize agricultural output.",
      methodology: [
        "Deploying IoT and AI models for precision agriculture.",
        "Building predictive climate data systems.",
        "Supporting green-tech and clean energy hardware startups."
      ],
      iconName: "tree-pine"
    },
    {
      id: "peace-social-cohesion",
      title: "Peace & Social Cohesion",
      description: "We recognize that technology can be a powerful diplomatic tool for civic participation, transparency, and resolving local governance conflicts.",
      methodology: [
        "Supporting civic-tech and transparency portals.",
        "Fostering cross-community digital training cohorts.",
        "Launching misinformation mitigation technologies."
      ],
      iconName: "shield-check"
    }
  ],
  cta: {
    heading: "Multiply Your Impact",
    subtext: "We are actively partnering with global organizations, NGOs, and governments to scale these systems exponentially. Let’s build the next metric together.",
    primaryCTA: { label: "Partner With Us", href: "/partnerships" }
  }
};
