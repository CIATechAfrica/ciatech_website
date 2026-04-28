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

export const revalidate = 0;

async function getSanityHomeData() {
  try {
    const data = await client.fetch(`{
      "homePage": *[_type == "homePage"][0],
      "aboutSection": *[_type == "aboutSection"][0],
      "corePillars": *[_type == "corePillar"],
      "solutions": *[_type == "solution"],
      "initiatives": *[_type == "initiative"],
      "impactStats": *[_type == "impactStat"]
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function Home() {
  const sanityData = await getSanityHomeData();

  // Deep merge Sanity Data over Static Fallback Data
  const data = {
    ...homeData,
    hero: {
      ...homeData.hero,
      badge: sanityData?.homePage?.heroBadge || homeData.hero.badge,
      headline: sanityData?.homePage?.heroHeadline || homeData.hero.headline,
      subtext: sanityData?.homePage?.heroSubtext || homeData.hero.subtext,
    },
    about: {
      ...homeData.about,
      heading: sanityData?.aboutSection?.heading || homeData.about.heading,
      subHeading: sanityData?.aboutSection?.subHeading || homeData.about.subHeading,
      mission: sanityData?.aboutSection?.mission || homeData.about.mission,
      description: sanityData?.aboutSection?.description || homeData.about.description,
    },
    corePillarsTeaser: {
      ...homeData.corePillarsTeaser,
      items: sanityData?.corePillars?.length > 0 ? sanityData.corePillars : homeData.corePillarsTeaser?.items || [],
    },
    solutionsTeaser: {
      ...homeData.solutionsTeaser,
      items: sanityData?.solutions?.length > 0 ? sanityData.solutions : homeData.solutionsTeaser?.items || [],
    },
    initiatives: sanityData?.initiatives?.length > 0 ? sanityData.initiatives : homeData.initiatives,
    impactStats: {
      ...homeData.impactStats,
      stats: sanityData?.impactStats?.length > 0 ? sanityData.impactStats : homeData.impactStats?.stats || [],
    }
  };

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
