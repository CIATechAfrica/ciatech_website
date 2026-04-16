import { HomeData } from "@/types";

export const homeData: HomeData = {
  seo: {
    title: "CIATECH Africa - Innovating for Inclusion",
    description: "Designing Scalable Solutions for Africa’s Development Challenges",
  },
  hero: {
    badge: "Innovating for Inclusion",
    title: "Designing Scalable Solutions for Africa’s Development Challenges",
    highlightWords: ["Scalable Solutions"],
    description: "CIATECH Africa is a development-driven social enterprise with an innovation hub operating at the intersection of technology, entrepreneurship, and systems change. We design and deploy scalable solutions that expand economic opportunity, strengthen resilience, and accelerate inclusive growth across underserved communities.",
    ctas: [
      { label: "Explore Our Work", href: "/solutions" },
      { label: "Partner With Us", href: "/contact" },
      { label: "View Our Impact", href: "/impact" }
    ],
    imageRef: "/images/hero.png"
  },
  about: {
    subHeading: "Who We Are",
    heading: "Driving Sustainable Change Through Technology",
    description: "CIATECH Africa is a youth-led social enterprise and innovation hub committed to solving complex development challenges through technology and systems-driven approaches. We go beyond program delivery to design ecosystems and build institutions.",
    link: { label: "Discover Our Full Story", href: "/about" },
    imageRef: "/images/about.png"
  },
  corePillarsTeaser: {
    heading: "Our Core Pillars",
    subtext: "We apply a systems-thinking lens to development across six strategic areas.",
    pillars: [
      {
        id: "digital-skills",
        title: "Digital Transformation & Future Skills",
        description: "Building talent pipelines by equipping youth and women with skills in AI, cloud computing, and cybersecurity.",
        iconName: "monitor-play"
      },
      {
        id: "inclusive-economies",
        title: "Inclusive Economies & Entrepreneurship",
        description: "Unlocking economic participation by supporting startups and SMEs with access to skills, markets, and finance.",
        iconName: "trending-up"
      },
      {
        id: "gender-inclusion",
        title: "Protection, Gender & Social Inclusion",
        description: "Designing inclusive systems that empower women, youth, and persons with disabilities to fully participate.",
        iconName: "users"
      },
      {
        id: "peacebuilding",
        title: "Peacebuilding & Community Resilience",
        description: "Leveraging technology to strengthen social cohesion, promote civic engagement, and address root causes of conflict.",
        iconName: "shield"
      },
      {
        id: "governance",
        title: "Governance & Institutional Strengthening",
        description: "Supporting institutions with digital tools, policy insights, and capacity development to improve transparency.",
        iconName: "landmark"
      },
      {
        id: "climate-resilience",
        title: "Climate Resilience & Green Innovation",
        description: "Accelerating climate-smart solutions—from sustainable agriculture to waste-to-energy innovations.",
        iconName: "leaf"
      }
    ]
  },
  partnerships: {
    heading: "PARTNERSHIPS",
    subHeading: "Trusted by Global Leaders",
    description: "We form strategic alliances with leading multilateral agencies, governments, and private sectors to co-create scalable, high-impact systems.",
    link: { label: "View Collaborative Models", href: "/partnerships" },
    logos: [
      { id: "1", name: "Multilateral Partner 1", imageRef: "/images/partners/partner-1.png" },
      { id: "2", name: "Government Hub", imageRef: "/images/partners/partner-2.png" },
      { id: "3", name: "Tech Ecosystem 1", imageRef: "/images/partners/partner-3.png" },
      { id: "4", name: "Global Investment", imageRef: "/images/partners/partner-4.png" }
    ]
  },
  solutionsTeaser: {
    heading: "Our Solutions",
    subtext: "Discover how we deploy inclusive, technology-enabled systems.",
    items: [
      {
        id: "innovation-venture",
        title: "Innovation & Venture Development Systems",
        description: "We identify, incubate, and scale high-impact startups solving real-world challenges.",
        items: ["Startup incubation & acceleration", "Product development & prototyping", "Investment readiness & linkages"]
      },
      {
        id: "ai4d",
        title: "AI for Development (AI4D)",
        description: "We design inclusive AI systems that serve low-resource and underserved communities.",
        items: ["Indigenous language AI", "Voice and data systems", "Agriculture, health & education AI"]
      },
      {
        id: "financial-inclusion",
        title: "Financial Inclusion & Digital Economy",
        description: "We expand access to finance through fintech innovation and ecosystem partnerships.",
        items: ["Digital payments & identity", "SME financing pipelines", "Financial literacy & inclusion"]
      },
      {
        id: "workforce-development",
        title: "Workforce Development Systems",
        description: "We build end-to-end pathways from learning to earning through targeted digital skills training.",
        items: ["AI, Cloud, Data, & Cyber training", "Certification & mentorship", "Job placement & enterprise support"]
      },
      {
        id: "trade-market-systems",
        title: "Trade & Market Systems Development",
        description: "We support SMEs to safely access and scale across regional and international markets.",
        items: ["AfCFTA-aligned trade readiness", "Cross-border trade frameworks", "Women-led export development"]
      }
    ],
    viewAllLink: { label: "View All Solutions", href: "/solutions" }
  },
  initiatives: [
    {
      id: "kanuri-ai",
      title: "Kanuri AI",
      description: "A pioneering indigenous language AI platform expanding digital access for millions of underserved speakers—unlocking inclusion in education, governance, and digital services.",
      iconName: "brain-circuit",
      href: "/research"
    },
    {
      id: "youth-innovation",
      title: "Youth Innovation & Civic Tech Program",
      description: "Empowering young innovators to build solutions that enhance transparency, civic participation, and governance.",
      iconName: "lightbulb",
      href: "/solutions"
    },
    {
      id: "women-in-business",
      title: "Women in Business Program",
      description: "Empowering women entrepreneurs across Northeast Nigeria and the Lake Chad region by transforming women-led enterprises into sustainable engines of inclusive economic growth.",
      iconName: "users",
      href: "/opportunities"
    },
    {
      id: "stem-champ",
      title: "STEM Champ Initiative",
      description: "Developing the next generation of African innovators by closing the skills gap, promoting gender equity in STEM, and creating a robust talent pipeline for the innovation ecosystem.",
      iconName: "microscope",
      href: "/solutions"
    }
  ],
  impactStats: {
    heading: "Driving Measurable Change",
    subtext: "Our work delivers tangible outcomes across multiple sectors:",
    stats: [
      { id: "women", value: "2,000+", label: "Women Economically Empowered", iconName: "heart-handshake" },
      { id: "individuals", value: "5,000+", label: "Individuals Equipped with Skills", iconName: "globe-2" },
      { id: "startups", value: "50+", label: "Startups Incubated & Supported", iconName: "rocket" },
      { id: "partnerships", value: "15", label: "Strategic Sector Partnerships", iconName: "handshake" },
      { id: "programs", value: "4", label: "Large-Scale Programs Implemented", iconName: "layers" }
    ],
    viewReportLink: { label: "Read The Full Impact Report", href: "/impact" }
  },
  researchTeaser: {
    heading: "RESEARCH & INSIGHTS",
    description: "We generate evidence to inform policy and practice:",
    items: [
      "Ecosystem mapping and diagnostics",
      "Policy briefs and white papers",
      "Innovation and impact case studies",
      "Data-driven insights for development programming"
    ],
    link: { label: "Explore Our Research", href: "/research" }
  },
  opportunitiesTeaser: {
    heading: "OPPORTUNITIES",
    items: [
      "Join our training programs",
      "Apply for startup incubation",
      "Explore career and internship opportunities",
      "Partner on high-impact initiatives"
    ],
    link: { label: "Work With Us", href: "/opportunities" }
  },
  galleryTeaser: {
    heading: "Impact in Action",
    subtext: "A visual journey through our diverse innovation clusters, agricultural incubators, and dynamic tech hubs across the continent.",
    link: { label: "Explore Our Full Gallery", href: "/gallery" },
    images: [
      { id: "img-1", imageRef: "/images/hero.png", title: "Tech Hub Labs", location: "Kano, Nigeria", date: "April 2026", span: "col-span-1 md:col-span-2 row-span-2 min-h-[300px]" as "col-span-1" | "col-span-2" },
      { id: "img-2", imageRef: "/images/new_hero.png", title: "AgriTech Scaleups", location: "Lake Chad", date: "March 2026", span: "col-span-1" },
      { id: "img-3", imageRef: "/images/about.png", title: "Policy Summits", location: "Abuja HQ", date: "Feb 2026", span: "col-span-1" },
      { id: "img-4", imageRef: "/images/hero.png", title: "Mentorship", location: "Nairobi", date: "Jan 2026", span: "col-span-1" },
      { id: "img-5", imageRef: "/images/new_hero.png", title: "Green Energy", location: "Maiduguri", date: "Dec 2025", span: "col-span-1" }
    ]
  },
  contactTeaser: {
    heading: "Let's Build Together",
    description: "Whether you're looking to invest in scalable startups, partner on policy frameworks, or join our community of innovators, our team is ready to connect.",
    email: "partnerships@ciatech.africa",
    phone: "+234 800 CIATECH",
    address: "Maiduguri, Borno State, Nigeria"
  },
  cta: {
    heading: "Let’s Build the Future—Together",
    subtext: "Whether you are a development partner, investor, policymaker, or innovator—CIATECH Africa provides the platform to design, test, and scale solutions that matter.",
    primaryCTA: { label: "Partner With Us", href: "/contact" },
    secondaryCTA: { label: "Explore Opportunities", href: "/opportunities" }
  },
  footer: {
    mission: "Creating sustainable pathways for digital inclusion and youth innovation across Africa.",
    address: "Maiduguri, Borno State, Nigeria",
    email: "contact@ciatech.africa",
    phone: "+234 123 456 7890",
    links: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Impact", href: "/impact" },
      { label: "Research", href: "/research" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Gallery", href: "/gallery" },
      { label: "Newsroom", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ],
    socials: [
      { id: "1", platform: "LinkedIn", href: "#", iconName: "linkedin" },
      { id: "2", platform: "X", href: "#", iconName: "x" },
      { id: "3", platform: "Facebook", href: "#", iconName: "facebook" },
      { id: "4", platform: "Instagram", href: "#", iconName: "instagram" },
      { id: "5", platform: "TikTok", href: "#", iconName: "tiktok" },
      { id: "6", platform: "Snapchat", href: "#", iconName: "snapchat" }
    ]
  }
};
