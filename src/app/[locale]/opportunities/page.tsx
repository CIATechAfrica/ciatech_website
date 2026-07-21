import { Metadata } from "next";
import { opportunitiesData } from "../../../../content/opportunities";
import { client } from "@/sanity/lib/client";
import { OpenRole } from "@/types";
import OpportunitiesClientWrapper from "./OpportunitiesClientWrapper";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale;
  try {
    const seoData = await client.fetch(`*[_type == "opportunitiesPage" && language == "${locale}"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || opportunitiesData.seo.title,
      description: seoData?.seoDescription || opportunitiesData.seo.description,
    };
  } catch (error) {
    return {
      title: opportunitiesData.seo.title,
      description: opportunitiesData.seo.description,
    };
  }
}

async function getSanityOpportunitiesData(locale: string) {
  try {
    const data = await client.fetch(`{
      "opportunitiesPage": *[_type == "opportunitiesPage" && language == "${locale}"][0],
      "roles": *[_type == "openRole" && language == "${locale}"] | order(_createdAt asc)
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function OpportunitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  const sanityData = await getSanityOpportunitiesData(locale);

  // Split fetched roles into Fellowships and Careers
  let sanityFellowships: OpenRole[] = [];
  let sanityCareers: OpenRole[] = [];

  if (sanityData?.roles && sanityData.roles.length > 0) {
    sanityFellowships = sanityData.roles.filter((r: any) => r.category === 'Fellowship');
    sanityCareers = sanityData.roles.filter((r: any) => r.category === 'Career');
  }

  // Deep Merge Sanity Data over Static Fallback Data
  const data = {
    ...opportunitiesData,
    hero: {
      ...opportunitiesData.hero,
      heading: sanityData?.opportunitiesPage?.heroHeading || opportunitiesData.hero.heading,
      subtext: sanityData?.opportunitiesPage?.heroSubtext || opportunitiesData.hero.subtext,
    },
    fellowshipsTitle: sanityData?.opportunitiesPage?.fellowshipsTitle || opportunitiesData.fellowshipsTitle,
    fellowshipsSubtext: sanityData?.opportunitiesPage?.fellowshipsSubtext || opportunitiesData.fellowshipsSubtext,
    careersTitle: sanityData?.opportunitiesPage?.careersTitle || opportunitiesData.careersTitle,
    careersSubtext: sanityData?.opportunitiesPage?.careersSubtext || opportunitiesData.careersSubtext,
    fellowships: sanityFellowships.length > 0 ? sanityFellowships : opportunitiesData.fellowships,
    careers: sanityCareers.length > 0 ? sanityCareers : opportunitiesData.careers,
  };

  return <OpportunitiesClientWrapper data={data} />;
}
