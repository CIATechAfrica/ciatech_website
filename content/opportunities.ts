import { OpportunitiesPageData } from "@/types";

export const opportunitiesData: OpportunitiesPageData = {
  seo: {
    title: "Careers & Fellowships | CIATECH Africa",
    description: "Join CIATECH as a researcher, engineer, or fellow to architect scalable ecosystems across Africa."
  },
  hero: {
    heading: "Architect the Ecosystem",
    subtext: "We are actively seeking top-tier talent, visionary researchers, and bold partners to scale our structural innovations.",
    imageRef: "/images/hero.png" // Fallback
  },
  fellowshipsTitle: "Incubation & Fellowships",
  fellowshipsSubtext: "Immersive programs designed to equip rising innovators with capital, mentorship, and operational scale.",
  fellowships: [
    {
      id: "kanuri-ai-fellowship",
      title: "Kanuri AI Research Fellow",
      type: "12-Month Fellowship",
      location: "Hybrid / Lake Chad Region",
      description: "Join the core lab developing sovereign LLMs. You will lead data curation protocols and interface with local linguistics experts to model indigenous languages for offline inference.",
      applyUrl: "#"
    },
    {
      id: "agritech-founder",
      title: "Climate-Tech Founder in Residence",
      type: "Incubation Program",
      location: "Remote / Pan-African",
      description: "Are you building hardware or software to protect agricultural yield from climate shocks? We provide non-dilutive equity, specialized engineering support, and access to our pilot farm network.",
      applyUrl: "#"
    }
  ],
  careersTitle: "Open Career Roles",
  careersSubtext: "Join our core operational and technical teams to manage cross-border infrastructure and policy mandates.",
  careers: [
    {
      id: "data-policy-lead",
      title: "Digital Policy & Governance Lead",
      type: "Full-Time",
      location: "Abuja, Nigeria",
      description: "Work directly with regional governments to draft frameworks for digital identity, data sovereignty, and cross-border tech trade alignment.",
      applyUrl: "#"
    },
    {
      id: "senior-swe",
      title: "Senior Full-Stack Engineer (Systems)",
      type: "Full-Time",
      location: "Remote UTC+1 to UTC+3",
      description: "Architect and maintain the high-availability infrastructure serving our rural digital portals. Strong background in offline-first capabilities and low-bandwidth optimizations required.",
      applyUrl: "#"
    },
    {
      id: "program-manager-women",
      title: "Director, Women in Business Initiatives",
      type: "Full-Time",
      location: "Maiduguri, Nigeria",
      description: "Scale our most impactful inclusion program. You will oversee budget allocation, partnership acquisition, and direct training pipelines for women-led SMEs in volatile zones.",
      applyUrl: "#"
    }
  ]
};
