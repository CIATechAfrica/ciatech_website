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
      description: "Deep dive analysis of local innovation and economic systems."
    },
    {
      id: "policy",
      title: "Policy briefs and white papers",
      description: "High-level documents informing government and institutional strategy."
    },
    {
      id: "case-studies",
      title: "Innovation and impact case studies",
      description: "Lessons learned and measurable outcomes from our programmatic deployments."
    },
    {
      id: "data-insights",
      title: "Data-driven insights for development programming",
      description: "Leveraging empirical metrics to align multinational interventions."
    }
  ] as ResearchItem[]
};
