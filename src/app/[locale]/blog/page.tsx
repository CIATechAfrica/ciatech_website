import { Metadata } from "next";
import { blogData } from "../../../../content/blog";
import { client } from "@/sanity/lib/client";
import BlogClientWrapper from "./BlogClientWrapper";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await client.fetch(`*[_type == "blogPage"][0]{ seoTitle, seoDescription }`);
    return {
      title: seoData?.seoTitle || blogData.seo.title,
      description: seoData?.seoDescription || blogData.seo.description,
    };
  } catch (error) {
    return {
      title: blogData.seo.title,
      description: blogData.seo.description,
    };
  }
}

async function getSanityBlogData() {
  try {
    const data = await client.fetch(`{
      "blogPage": *[_type == "blogPage"][0],
      "posts": *[_type == "blogPost"] | order(date desc){
        ...,
        "thumbnailRef": thumbnail.asset->url
      }
    }`);
    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return null;
  }
}

export default async function BlogPage() {
  const sanityData = await getSanityBlogData();

  // If we have Sanity posts, the first one is featured, the rest are the grid
  const hasSanityPosts = sanityData?.posts && sanityData.posts.length > 0;
  const featuredPost = hasSanityPosts ? sanityData.posts[0] : blogData.featuredPost;
  const gridPosts = hasSanityPosts ? sanityData.posts.slice(1) : blogData.posts;

  // Deep Merge Sanity Data over Static Fallback Data
  const data = {
    ...blogData,
    hero: {
      ...blogData.hero,
      heading: sanityData?.blogPage?.heroHeading || blogData.hero.heading,
      subtext: sanityData?.blogPage?.heroSubtext || blogData.hero.subtext,
    },
    feedTitle: sanityData?.blogPage?.feedTitle || blogData.feedTitle,
    featuredPost: featuredPost,
    posts: gridPosts,
  };

  // Format dates manually so we don't have hydration mismatches
  if (data.featuredPost?.date) {
    const d = new Date(data.featuredPost.date);
    if (!isNaN(d.getTime())) data.featuredPost.date = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  data.posts.forEach((post: any) => {
    if (post.date) {
      const d = new Date(post.date);
      if (!isNaN(d.getTime())) post.date = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  });

  return <BlogClientWrapper data={data as any} />;
}
