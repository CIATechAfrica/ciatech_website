import { ResearchItem } from "@/types";

export const researchData = {
  header: {
    title: "Research & Insights",
    description: "We generate evidence-based data and insights to inform policy and practice.",
  },
  items: [
    {
      id: "mapping",
      title: "Ecosystem mapping and diagnostics",
      fullDescription: "Deep dive analysis of local innovation and economic systems."
    },
    {
      id: "policy",
      title: "Policy briefs and white papers",
      fullDescription: "High-level documents informing government and institutional strategy."
    },
    {
      id: "case-studies",
      title: "Innovation and impact case studies",
      fullDescription: "Lessons learned and measurable outcomes from our programmatic deployments."
    },
    {
      id: "data-insights",
      title: "Data-driven insights for development programming",
      fullDescription: "Leveraging empirical metrics to align multinational interventions."
    }
  ] as ResearchItem[]
};
