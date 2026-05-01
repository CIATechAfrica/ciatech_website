import { createClient } from '@sanity/client';
import { blogData } from './content/blog';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function migrate() {
  console.log('Migrating Blog Data...');

  try {
    // 1. Migrate Featured Post
    const fp = blogData.featuredPost;
    const featuredDoc = {
      _id: `blog-${fp.id}`,
      _type: 'blogPost',
      title: fp.title,
      snippet: fp.snippet,
      content: fp.content,
      author: fp.author,
      // Setting string date into 'YYYY-MM-DD' for Sanity native Date type
      date: new Date(fp.date).toISOString().split('T')[0],
      readTime: fp.readTime,
    };
    await client.createOrReplace(featuredDoc);
    console.log(`Created Featured Post: ${fp.title}`);

    // 2. Migrate Standard Posts
    for (const p of blogData.posts) {
      const doc = {
        _id: `blog-${p.id}`,
        _type: 'blogPost',
        title: p.title,
        snippet: p.snippet,
        content: p.content,
        author: p.author,
        date: new Date(p.date).toISOString().split('T')[0],
        readTime: p.readTime,
      };
      await client.createOrReplace(doc);
      console.log(`Created Post: ${p.title}`);
    }

    // 3. Create Blog Page Singleton
    const pageDoc = {
      _id: 'blogPage',
      _type: 'blogPage',
      seoTitle: blogData.seo.title,
      seoDescription: blogData.seo.description,
      heroHeading: blogData.hero.heading,
      heroSubtext: blogData.hero.subtext,
      feedTitle: blogData.feedTitle,
      featuredPost: {
        _type: 'reference',
        _ref: `blog-${fp.id}`
      }
    };
    await client.createOrReplace(pageDoc);
    console.log('Created Blog Page Singleton');

    console.log('Blog Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
