import { Metadata } from "next";
import { galleryData } from "../../../../content/gallery";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import GalleryClientWrapper from "./GalleryClientWrapper";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale;
  try {
    const seoData = await client.fetch(`*[_type == "galleryPage" && language == "${locale}"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || galleryData.seo.title,
      description: seoData?.seoDescription || galleryData.seo.description,
      openGraph: {
        title: seoData?.seoTitle || galleryData.seo.title,
        description: seoData?.seoDescription || galleryData.seo.description,
        images: ["/logo.png"],
      },
      twitter: {
        card: "summary_large_image",
        title: seoData?.seoTitle || galleryData.seo.title,
        description: seoData?.seoDescription || galleryData.seo.description,
        images: ["/logo.png"],
      }};
  } catch (error) {
    return {
      title: galleryData.seo.title,
      description: galleryData.seo.description,
    };
  }
}

async function getSanityGalleryData(locale: string) {
  try {
    const data = await client.fetch(`{
      "galleryPage": *[_type == "galleryPage" && language == "${locale}"][0],
      "galleryImages": *[_type == "galleryImage" && language == "${locale}"] | order(_createdAt desc){
        ...,
        "imageRef": image.asset->url
      }
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  const sanityData = await getSanityGalleryData(locale);

  // Deep Merge Sanity Data over Static Fallback Data
  const data = {
    ...galleryData,
    hero: {
      ...galleryData.hero,
      heading: sanityData?.galleryPage?.heroHeading || galleryData.hero.heading,
      subtext: sanityData?.galleryPage?.heroSubtext || galleryData.hero.subtext,
    },
    gridTitle: sanityData?.galleryPage?.gridTitle || galleryData.gridTitle,
    images: sanityData?.galleryImages?.length > 0 ? sanityData.galleryImages : galleryData.images,
  };

  return <GalleryClientWrapper data={data} />;
}
