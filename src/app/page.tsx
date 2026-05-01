import { Metadata } from "next";
import { homeData } from "../../content/home";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "homePage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || homeData.seo.title,
      description: seoData?.seoDescription || homeData.seo.description,
    };
  } catch (error) {
    return {
      title: homeData.seo.title,
      description: homeData.seo.description,
    };
  }
}
async function getSanityHomeData() {
  try {
    const data = await client.fetch(`{
      "homePage": *[_type == "homePage"][0],
      "aboutSection": *[_type == "aboutSection"][0],
      "corePillars": *[_type == "corePillar"],
      "solutions": *[_type == "solution"],
      "initiatives": *[_type == "initiative"],
      "impactStats": *[_type == "impactStat"],
      "callToAction": *[_type == "callToAction"][0]
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
      title: sanityData?.homePage?.heroHeadline || homeData.hero.title,
      description: sanityData?.homePage?.heroSubtext || homeData.hero.description,
      imageRef: sanityData?.homePage?.heroImage ? urlForImage(sanityData.homePage.heroImage)?.url() || homeData.hero.imageRef : homeData.hero.imageRef,
    },
    about: {
      ...homeData.about,
      heading: sanityData?.aboutSection?.heading || homeData.about.heading,
      description: sanityData?.aboutSection?.description || homeData.about.description,
      imageRef: sanityData?.aboutSection?.aboutImage ? urlForImage(sanityData.aboutSection.aboutImage)?.url() || homeData.about.imageRef : homeData.about.imageRef,
      link: {
        label: sanityData?.aboutSection?.linkLabel || homeData.about.link.label,
        href: sanityData?.aboutSection?.linkHref || homeData.about.link.href,
      }
    },
    corePillarsTeaser: {
      ...homeData.corePillarsTeaser,
      pillars: sanityData?.corePillars?.length > 0 ? sanityData.corePillars : homeData.corePillarsTeaser?.pillars || [],
    },
    solutionsTeaser: {
      ...homeData.solutionsTeaser,
      items: sanityData?.solutions?.length > 0 ? sanityData.solutions : homeData.solutionsTeaser?.items || [],
    },
    initiatives: sanityData?.initiatives?.length > 0 ? sanityData.initiatives : homeData.initiatives,
    impactStats: {
      ...homeData.impactStats,
      stats: sanityData?.impactStats?.length > 0 ? sanityData.impactStats : homeData.impactStats?.stats || [],
    },
    cta: {
      ...homeData.cta,
      heading: sanityData?.callToAction?.heading || homeData.cta.heading,
      subtext: sanityData?.callToAction?.description || homeData.cta.subtext,
      imageRef: sanityData?.callToAction?.image ? urlForImage(sanityData.callToAction.image)?.url() : undefined,
      primaryCTA: {
        label: sanityData?.callToAction?.primaryLabel || homeData.cta.primaryCTA.label,
        href: sanityData?.callToAction?.primaryHref || homeData.cta.primaryCTA.href,
      }
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
      <CTASection data={data.cta} />
    </>
  );
}
