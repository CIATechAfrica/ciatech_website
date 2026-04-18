export interface LinkRef {
  label: string;
  href: string;
}

export interface CorePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionInfo {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  items?: string[];
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  items?: string[];
  footerText?: string;
  iconName: string;
  href: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface Partnership {
  id: string;
  category: string;
  iconName?: string;
}

// Merged with global ResearchItem below

export interface OpportunityItem {
  id: string;
  title: string;
  actionLabel: string;
  href: string;
}

// Merged with global GalleryItem below

export interface ContactDataProps {
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  id: string;
  platform?: string;
  href: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageRef: string;
  linkedin?: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  imageRef: string;
}

export interface HomeData {
  seo: { title: string; description: string; };
  hero: {
    badge?: string;
    title?: string;
    headline?: string;
    highlightWords?: string[];
    description?: string;
    subtext?: string;
    ctas: LinkRef[];
    imageRef: string;
  };
  aboutTeaser?: {
    heading: string;
    mission?: string;
    description: string;
    link: LinkRef;
    imageRef: string;
  };
  about?: {
    heading: string;
    subHeading?: string;
    mission?: string;
    description: string;
    link: LinkRef;
    imageRef: string;
  };
  pillarsTeaser?: {
    heading: string;
    description: string;
    items: CorePillar[];
  };
  corePillarsTeaser?: {
    heading: string;
    subtext?: string;
    description: string;
    items?: CorePillar[];
    pillars?: CorePillar[];
  };
  solutionsTeaser: {
    heading: string;
    subtext?: string;
    items: SolutionInfo[];
    viewAllLink: LinkRef;
  };
  initiatives: Initiative[];
  impactStats?: {
    heading: string;
    subtext?: string;
    stats: ImpactStat[];
    viewReportLink?: LinkRef;
  };
  impact?: {
    heading?: string;
    subtext?: string;
    stats?: ImpactStat[];
    viewReportLink?: LinkRef;
  };
  partnerships: {
    heading: string;
    subHeading?: string;
    description: string;
    link?: LinkRef;
    logos?: PartnerLogo[];
    types?: any[];
  };
  researchTeaser?: {
    heading: string;
    description: string;
    items: string[];
    link: LinkRef;
  };
  opportunitiesTeaser?: {
    heading: string;
    items: string[];
    link: LinkRef;
  };
  galleryTeaser?: {
    heading: string;
    subtext: string;
    link: LinkRef;
    images: GalleryItem[];
  };
  contactTeaser?: ContactDataProps;
  cta: {
    heading: string;
    subtext: string;
    primaryCTA: LinkRef;
    secondaryCTA?: LinkRef;
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

export interface CollaborativeModel {
  id: string;
  category: string;
  description: string;
  iconName: string;
}

export interface PartnershipCategoryData {
  category: string;
  description: string;
  logos: PartnerLogo[];
}

export interface PartnershipPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  modelsTitle: string;
  modelsSubtext: string;
  models: CollaborativeModel[];
  directoryTitle: string;
  directorySubtext: string;
  directory: PartnershipCategoryData[];
  cta: {
    heading: string;
    subtext: string;
    button: LinkRef;
  };
}

export interface DetailedSolution {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageRef: string;
  iconName?: string;
}

export interface SolutionsPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  introTitle: string;
  introSubtext: string;
  solutions: DetailedSolution[];
  cta: {
    heading: string;
    subtext: string;
    primaryCTA: LinkRef;
  };
}

export interface DetailedImpactArea {
  id: string;
  title: string;
  description: string;
  methodology: string[];
  iconName: string;
}

export interface ImpactPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  introTitle: string;
  introSubtext: string;
  stats: ImpactStat[];
  areasTitle: string;
  impactAreas: DetailedImpactArea[];
  cta: {
    heading: string;
    subtext: string;
    primaryCTA: LinkRef;
  };
}

export interface ResearchItem {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  category?: string;
  date?: string;
  imageRef?: string;
  pdfUrl?: string;
}

export interface ResearchPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  featured: ResearchItem;
  publicationsTitle: string;
  publications: ResearchItem[];
}

export interface OpenRole {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  applyUrl: string;
}

export interface OpportunitiesPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  fellowshipsTitle: string;
  fellowshipsSubtext: string;
  fellowships: OpenRole[];
  careersTitle: string;
  careersSubtext: string;
  careers: OpenRole[];
}

export interface ContactEndpoint {
  id: string;
  department: string;
  description: string;
  email: string;
}

export interface OperationBase {
  id: string;
  city: string;
  country: string;
  address: string;
  type: string;
}

export interface ContactPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  basesTitle: string;
  bases: OperationBase[];
  endpointsTitle: string;
  endpoints: ContactEndpoint[];
}

export interface GalleryItem {
  id: string;
  title: string;
  imageRef: string;
  location?: string;
  date?: string;
  span?: string;
  description?: string;
  className?: string;
}

export interface GalleryPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  gridTitle: string;
  images: GalleryItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  content: string; // The full article body
  author: string;
  date: string;
  readTime: string;
  thumbnailRef: string;
}

export interface BlogPageData {
  seo: { title: string; description: string; };
  hero: {
    heading: string;
    subtext: string;
    imageRef: string;
  };
  feedTitle: string;
  featuredPost: BlogPost;
  posts: BlogPost[];
}
