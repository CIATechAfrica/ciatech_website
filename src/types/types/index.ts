export interface LinkRef {
  label: string;
  href: string;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  iconName: string;
  href?: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface SocialLink {
  id: string;
  href: string;
  iconName: string;
}

export interface CorePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Partnership {
  id: string;
  title: string;
  description?: string;
}

export interface ResearchInsight {
  id: string;
  title: string;
}

export interface Opportunity {
  id: string;
  title: string;
  action: string;
}

export interface HomeData {
  seo: { title: string; description: string; };
  hero: {
    badge: string;
    title: string;
    highlightWords: string[];
    description: string;
    ctas: LinkRef[];
    imageRef: string;
  };
  about: {
    subHeading: string;
    heading: string;
    whoWeAre: string;
    mission: string;
    vision: string;
    approach: string[];
    link: LinkRef;
    imageRef: string;
  };
  corePillarsTeaser: {
    heading: string;
    subtext: string;
    pillars: CorePillar[];
  };
  solutionsTeaser: {
    heading: string;
    subtext: string;
    solutions: Solution[];
    link: LinkRef;
  };
  initiatives: Initiative[];
  impactStats: {
    heading: string;
    stats: ImpactStat[];
  };
  cta: {
    heading: string;
    subtext: string;
    primaryCTA: LinkRef;
    secondaryCTA: LinkRef;
  };
  footer: {
    mission: string;
    address: string;
    email: string;
    phone: string;
    links: LinkRef[];
    socials: SocialLink[];
  };
}

export interface PageData<T> {
  seo: { title: string; description: string; };
  header: {
    title: string;
    subtitle: string;
  };
  content: T;
}
