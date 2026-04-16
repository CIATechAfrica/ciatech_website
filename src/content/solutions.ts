import { SolutionInfo } from "@/types";

export const solutionsData = {
  header: {
    title: "Our Solutions",
    description: "Systems-level interventions tailored to solve Africa's complex developmental challenges through innovation and scalability.",
  },
  items: [
    {
      id: "innovation",
      title: "Innovation & Venture Development Systems",
      description: "We identify, incubate, and scale high-impact startups solving real-world challenges.",
      focusAreas: [
        "Startup incubation & acceleration",
        "Product development & prototyping",
        "Investment readiness & investor linkages",
        "Innovation ecosystem strengthening"
      ],
      iconName: "rocket"
    },
    {
      id: "ai4d",
      title: "AI for Development (AI4D)",
      description: "We design inclusive AI systems that serve low-resource and underserved communities.",
      focusAreas: [
        "Indigenous language AI (e.g., Kanuri AI)",
        "Voice and data systems for rural populations",
        "AI applications in agriculture, health, and education"
      ],
      iconName: "brain"
    },
    {
      id: "financial",
      title: "Financial Inclusion & Digital Economy Systems",
      description: "We expand access to finance through fintech innovation and ecosystem partnerships.",
      focusAreas: [
        "Digital payments and identity systems",
        "SME financing pipelines",
        "Financial literacy and inclusion"
      ],
      iconName: "circle-dollar-sign"
    },
    {
      id: "workforce",
      title: "Workforce Development Systems",
      description: "We build end-to-end pathways from learning to earning.",
      focusAreas: [
        "Skills training (AI, Cloud, Data, Cybersecurity)",
        "Certification & mentorship",
        "Job placement and entrepreneurship support"
      ],
      iconName: "briefcase"
    },
    {
      id: "trade",
      title: "Trade & Market Systems Development",
      description: "We support SMEs to access regional and international markets.",
      focusAreas: [
        "AfCFTA-aligned trade readiness",
        "Cross-border trade (Lake Chad region)",
        "Women-led export development"
      ],
      iconName: "shopping-cart"
    }
  ] as SolutionInfo[]
};
