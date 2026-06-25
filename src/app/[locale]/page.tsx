import { Metadata } from "next";
import { homeData } from "../../../content/home";
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
      "initiatives": *[_type == "researchPublication"] | order(_createdAt asc),
      "impactStats": *[_type == "impactStat"] | order(_createdAt asc),
      "contactInformation": *[_type == "contactInformation"][0],
      "callToAction": *[_type == "callToAction"][0],
      "galleryPage": *[_type == "galleryPage"][0],
      "galleryImages": *[_type == "galleryImage"] | order(_createdAt desc)[0...4]{
        ...,
        "imageRef": image.asset->url
      },
      "partnerLogos": *[_type == "partnerLogo"] | order(_createdAt desc){
        ...,
        "imageRef": logo.asset->url
      }
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
    galleryTeaser: {
      ...homeData.galleryTeaser,
      heading: sanityData?.galleryPage?.heroHeading || homeData.galleryTeaser.heading,
      subtext: sanityData?.galleryPage?.heroSubtext || homeData.galleryTeaser.subtext,
      images: sanityData?.galleryImages?.length > 0 ? sanityData.galleryImages : homeData.galleryTeaser.images,
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
    },
    partnerships: {
      ...homeData.partnerships,
      logos: sanityData?.partnerLogos?.length > 0 ? sanityData.partnerLogos : homeData.partnerships.logos,
    },
    contactTeaser: {
      ...homeData.contactTeaser,
      heading: sanityData?.contactInformation?.heading || homeData.contactTeaser.heading,
      description: sanityData?.contactInformation?.description || homeData.contactTeaser.description,
      globalHeadquarters: sanityData?.contactInformation?.globalHeadquarters,
      subOffices: sanityData?.contactInformation?.subOffices,
    }
  };

  return (
    <>
      <HeroBanner data={data.hero} />
      <div id="about"><AboutSection data={data.about} /></div>
      <CorePillarsTeaser data={data.corePillarsTeaser} />
      <div id="solutions"><SolutionsTeaser data={data.solutionsTeaser} /></div>
      <div id="research"><InitiativesGrid data={data.initiatives} /></div>
      <div id="impact"><ImpactStatsGrid data={data.impactStats} /></div>
      <div id="gallery"><GallerySection data={data.galleryTeaser} /></div>
      <div id="partnerships"><PartnershipsTeaser data={data.partnerships} /></div>
      <CTASection data={data.cta} />
    </>
  );
}
