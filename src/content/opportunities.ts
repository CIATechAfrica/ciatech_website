import { OpportunityItem } from "@/types";

export const opportunitiesData = {
  header: {
    title: "Opportunities",
    description: "Join us in driving inclusive impact. We are always looking for driven innovators, partners, and learners.",
  },
  items: [
    {
      id: "training",
      title: "Join our training programs",
      actionLabel: "View Programs",
      href: "/contact"
    },
    {
      id: "startup",
      title: "Apply for startup incubation",
      actionLabel: "Apply Now",
      href: "/contact"
    },
    {
      id: "career",
      title: "Explore career and internship opportunities",
      actionLabel: "View Careers",
      href: "/contact"
    },
    {
      id: "partner",
      title: "Partner on high-impact initiatives",
      actionLabel: "Partner With Us",
      href: "/contact"
    }
  ] as OpportunityItem[]
};
