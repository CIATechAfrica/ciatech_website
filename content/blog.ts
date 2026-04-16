import { BlogPageData } from "@/types";

export const blogData: BlogPageData = {
  seo: {
    title: "Newsroom & Corporate Updates | CIATECH Africa",
    description: "Chronological updates on our deployments, regional milestones, and infrastructural progress."
  },
  hero: {
    heading: "The Newsroom",
    subtext: "Live dispatches, executive briefings, and engineering updates from across our global operational footprint.",
    imageRef: "/images/hero.png" // Fallback hero image
  },
  feedTitle: "Latest Dispatches",
  featuredPost: {
    id: "blog-001",
    title: "Commissioning the Next Generation of African Identity Infrastructure",
    snippet: "CIATech has successfully concluded phase one testing for our new decentralized identity framework across three key economic zones.",
    content: "Our team has spent the last fourteen months aggressively prototyping a new decentralized identity framework. Yesterday, we successfully concluded phase one live testing across three major economic zones: Maiduguri, Abuja, and Lagos. This framework strips away redundant bureaucratic layers and replaces them with a zero-trust encrypted ledger managed strictly by localized state operators. Next quarter, we will begin formal syndication with federal partners to ensure sweeping legislative adoption.",
    author: "Abubakar M. Aji",
    date: "April 15, 2026",
    readTime: "4 min read",
    thumbnailRef: "/images/new_hero.png" // Using the primary visual aesthetic
  },
  posts: [
    {
      id: "blog-002",
      title: "Strategic Alliance Formed with Agritech Consortium",
      snippet: "Expanding our footprint beyond digital identity, we are deploying sensor networks for the Lake Chad agricultural basin.",
      content: "Beyond our core digital identity mandates, CIATech is rapidly accelerating hardware deployments. This week, we formalized a strategic alliance with the Lake Chad Agritech Consortium. We will be providing the backend server architecture and edge-node sensor networks for their upcoming 10,000-acre smart farming initiative. This marks a massive pivot towards holistic, multi-sector infrastructure integration.",
      author: "Engineering Core",
      date: "March 28, 2026",
      readTime: "3 min read",
      thumbnailRef: "/images/about.png"
    },
    {
      id: "blog-003",
      title: "Kanuri AI NLP Module Achieves 94% Accuracy Benchmark",
      snippet: "Our proprietary Natural Language Processing model for native African languages hits a critical accuracy milestone.",
      content: "Building localized technology means building localized communication pipelines. Our proprietary Natural Language Processing team has officially published the testing parameters for the Kanuri AI linguistics module. Achieving an unprecedented 94% syntax prediction accuracy, this model will serve as the backbone for the automated civic engagement platforms we are rolling out later this year.",
      author: "AI Research Division",
      date: "February 12, 2026",
      readTime: "6 min read",
      thumbnailRef: "/images/hero.png"
    }
  ]
};
