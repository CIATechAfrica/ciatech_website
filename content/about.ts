import { TeamMember } from "@/types";

export const aboutData = {
  seo: {
    title: "About Us - CIATECH Africa",
    description: "Learn about our mission, vision, and the systems-thinking approach we use to scale tech inclusion across Africa."
  },
  header: {
    title: "Who We Are",
    subtitle: "We go beyond program delivery to design ecosystems, build institutions, and scale solutions that create lasting impact."
  },
  ourStory: {
    heading: "Driving Sustainable Change Through Technology",
    content: "CIATECH Africa is a youth-led social enterprise and innovation hub committed to solving complex development challenges through technology and systems-driven approaches. Our work spans fragile and underserved regions, with a strong footprint in Northeast Nigeria and the Lake Chad region. We recognize that true inclusion requires addressing systemic barriers, which is why we blend local insights with scalable tech architectures."
  },
  missionVision: {
    mission: {
      title: "Our Mission",
      content: "To design and scale innovative, technology-driven solutions that unlock economic participation, strengthen communities, and transform systems."
    },
    vision: {
      title: "Our Vision",
      content: "An inclusive, resilient, and technology-enabled Africa where every individual has the opportunity to thrive."
    }
  },
  approach: {
    heading: "Our Approach",
    subtext: "We apply a strict systems-thinking lens mapped across four distinct operational phases.",
    steps: [
      {
        id: "step-1",
        title: "Diagnose",
        description: "We locate ecosystem gaps through intensive grassroots research and data analytics.",
        iconName: "search"
      },
      {
        id: "step-2",
        title: "Design",
        description: "We architect context-driven, scalable interventions tailored to local constraints.",
        iconName: "pen-tool"
      },
      {
        id: "step-3",
        title: "Deploy",
        description: "We build and deploy inclusive, technology-enabled products directly into the field.",
        iconName: "rocket"
      },
      {
        id: "step-4",
        title: "Scale",
        description: "We maximize impact through strategic partnerships, policy alignment, and financing.",
        iconName: "scaling"
      }
    ]
  },
  team: {
    heading: "Meet The Leadership",
    subtext: "The minds driving systems change across the ecosystem.",
    members: [
      {
        id: "team-1",
        name: "Abubakar M Aji",
        role: "Founder & Executive Director",
        imageRef: "/images/hero.png",
        linkedin: "#"
      },
      {
        id: "team-2",
        name: "Director Name",
        role: "Head of Research & Policy",
        imageRef: "/images/about.png",
        linkedin: "#"
      },
      {
        id: "team-3",
        name: "Director Name",
        role: "Director of Operations",
        imageRef: "/images/new_hero.png",
        linkedin: "#"
      }
    ] as TeamMember[]
  }
};
