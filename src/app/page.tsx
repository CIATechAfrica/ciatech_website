import { homeData } from "../../content/home";
import { client } from "@/sanity/lib/client";

import HeroBanner from "@/components/blocks/HeroBanner";
import AboutSection from "@/components/blocks/AboutSection";
import CorePillarsTeaser from "@/components/blocks/CorePillarsTeaser";
import SolutionsTeaser from "@/components/blocks/SolutionsTeaser";
import InitiativesGrid from "@/components/blocks/InitiativesGrid";
import ImpactStatsGrid from "@/components/blocks/ImpactStatsGrid";
import GallerySection from "@/components/blocks/GallerySection";
import PartnershipsTeaser from "@/components/blocks/PartnershipsTeaser";
import ContactUsSection from "@/components/blocks/ContactUsSection";
import CTASection from "@/components/blocks/CTASection";

async function getSanityHomeData() {
  try {
    const data = await client.fetch(`*[_type == "homePage"][0]`);
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  // 1. Attempt to fetch from Sanity Database
  const sanityData = await getSanityHomeData();

  // 2. Map Sanity data to our strict Component Props, or fallback to Static Data
  const data = sanityData ? {
    ...homeData,
    hero: {
      ...homeData.hero,
      badge: sanityData.heroBadge || homeData.hero.badge,
      headline: sanityData.heroHeadline || homeData.hero.headline,
      subtext: sanityData.heroSubtext || homeData.hero.subtext,
    }
  } : homeData;

  return (
    <>
      <HeroBanner data={data.hero} />
      <AboutSection data={data.about} />
      <CorePillarsTeaser data={data.corePillarsTeaser} />
      <SolutionsTeaser data={data.solutionsTeaser} />
      <InitiativesGrid data={data.initiatives} />
      <ImpactStatsGrid data={data.impactStats} />
      <GallerySection data={data.galleryTeaser} />
      <PartnershipsTeaser data={data.partnerships} />
      <ContactUsSection data={data.contactTeaser} />
      <CTASection data={data.cta} />
    </>
  );
}
