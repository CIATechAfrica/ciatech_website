import { HomeDataProps } from "@/types";

export const homeData: HomeDataProps = {
  seo: {
    title: "CIATECH Africa - Innovating for Inclusion",
    description: "Building Systems. Scaling Impact.",
  },
  hero: {
    headline: "Designing Scalable Solutions for Africa's Development Challenges",
    subtext: "CIATECH Africa is a development-driven social enterprise with an innovation hub operating at the intersection of technology, entrepreneurship, and systems change. We design and deploy scalable solutions that expand economic opportunity, strengthen resilience, and accelerate inclusive growth across underserved communities.",
    ctas: [
      { label: "Explore Our Work", href: "/solutions" },
      { label: "Partner With Us", href: "/contact" },
      { label: "View Our Impact", href: "/impact" }
    ],
    imageRef: "/images/new_hero.png"
  },
  aboutTeaser: {
    heading: "Who We Are",
    description: "CIATECH Africa is a youth-led social enterprise and innovation hub committed to solving complex development challenges through technology and systems-driven approaches.",
    mission: "Our Mission: To design and scale innovative, technology-driven solutions that unlock economic participation, strengthen communities, and transform systems.",
    link: { label: "Read Our Full Approach", href: "/about" },
    imageRef: "/images/about.png"
  },
  pillarsTeaser: {
    heading: "Our Core Pillars",
    description: "We work across six foundational areas to create lasting ecosystems.",
    items: [
      {
        id: "digital",
        title: "Digital Transformation & Future Skills",
        description: "Equipping youth and women with in-demand skills in AI, data, and cloud.",
        iconName: "laptop"
      },
      {
        id: "economies",
        title: "Inclusive Economies & Entrepreneurship",
        description: "Unlocking participation by supporting startups and SMEs with regional market access.",
        iconName: "chart-bar"
      },
      {
        id: "inclusion",
        title: "Protection, Gender & Social Inclusion",
        description: "Empowering disadvantaged groups to participate safely and equitably.",
        iconName: "users"
      }
    ]
  },
  solutionsTeaser: {
    heading: "Our Solutions",
    items: [
      {
        id: "innovation",
        title: "Innovation & Venture Development",
        description: "Identify, incubate, and scale high-impact startups solving real-world challenges.",
        iconName: "rocket"
      },
      {
        id: "ai4d",
        title: "AI for Development (AI4D)",
        description: "Design inclusive AI systems serving low-resource and underserved communities.",
        iconName: "brain"
      }
    ],
    viewAllLink: { label: "View All Solutions", href: "/solutions" }
  },
  initiatives: [
    {
      id: "kanuri-ai",
      title: "Kanuri AI",
      description: "A pioneering indigenous language AI platform expanding digital access.",
      iconName: "brain-circuit",
      href: "/research"
    },
    {
      id: "youth-innovation",
      title: "Youth Innovation",
      description: "Empowering young innovators to build solutions that enhance governance.",
      iconName: "lightbulb",
      href: "/solutions"
    },
    {
      id: "women-in-business",
      title: "Women in Business",
      description: "Empowering women entrepreneurs across Northeast Nigeria.",
      iconName: "users",
      href: "/opportunities"
    },
    {
      id: "stem-champ",
      title: "STEM Champ",
      description: "Developing the next generation of STEM innovators.",
      iconName: "microscope",
      href: "/solutions"
    }
  ],
  impact: {
    heading: "Driving Measurable Change",
    stats: [
      { id: "women", value: "2,000+", label: "Women Empowered", iconName: "heart-handshake" },
      { id: "individuals", value: "5,000+", label: "Individuals Equipped", iconName: "globe-2" },
      { id: "startups", value: "50+", label: "Startups Incubated", iconName: "rocket" },
      { id: "partnerships", value: "15", label: "Strategic Partnerships", iconName: "handshake" },
      { id: "programs", value: "4", label: "Large-Scale Programs", iconName: "folder" }
    ]
  },
  partnerships: {
    heading: "Collaborating for Scale",
    description: "Our partnership model is built on co-creation, shared value, and scalable impact.",
    types: [
      { id: "p1", category: "Multilateral and UN agencies" },
      { id: "p2", category: "Government institutions" },
      { id: "p3", category: "Academic and research institutions" },
      { id: "p4", category: "Private sector and innovation ecosystems" }
    ]
  },
  cta: {
    heading: "Let's Build the Future—Together",
    subtext: "Whether you are a partner, investor, or innovator—CIATECH Africa provides the platform to design and scale solutions that matter.",
    primaryCTA: { label: "Partner With Us", href: "/contact" }
  },
  footer: {
    mission: "Designing scalable solutions for Africa's development challenges.",
    address: "📍 Maiduguri, Nigeria",
    email: "📧 contact@ciatech.ng",
    phone: "",
    links: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Impact", href: "/impact" },
      { label: "Research", href: "/research" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Contact", href: "/contact" }
    ],
    socials: [
      { id: "linkedin", href: "#", iconName: "linkedin" },
      { id: "twitter", href: "#", iconName: "twitter" },
      { id: "facebook", href: "#", iconName: "facebook" }
    ]
  }
};
