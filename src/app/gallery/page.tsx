import { Metadata } from "next";
import { galleryData } from "../../../content/gallery";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import GalleryClientWrapper from "./GalleryClientWrapper";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "galleryPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || galleryData.seo.title,
      description: seoData?.seoDescription || galleryData.seo.description,
    };
  } catch (error) {
    return {
      title: galleryData.seo.title,
      description: galleryData.seo.description,
    };
  }
}

async function getSanityGalleryData() {
  try {
    const data = await client.fetch(`{
      "galleryPage": *[_type == "galleryPage"][0],
      "galleryImages": *[_type == "galleryImage"] | order(_createdAt desc){
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

export default async function GalleryPage() {
  const sanityData = await getSanityGalleryData();

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
