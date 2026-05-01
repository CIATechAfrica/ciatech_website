import { createClient } from '@sanity/client';
import { homeData } from './content/home';
import { researchData } from './content/research';
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
  console.log('Migrating Research Data...');

  try {
    // 1. Create Research Page Singleton
    const pageDoc = {
      _id: 'researchPage',
      _type: 'researchPage',
      seoTitle: researchData.seo.title,
      seoDescription: researchData.seo.description,
      heroHeading: researchData.hero.heading,
      heroSubtext: researchData.hero.subtext,
      publicationsTitle: researchData.publicationsTitle,
    };
    await client.createOrReplace(pageDoc);
    console.log('Created Research Page Singleton');

    // 2. Migrate Initiatives into Research Publications
    for (const init of homeData.initiatives) {
      const doc = {
        _id: `research-${init.id}`,
        _type: 'researchPublication',
        title: init.title,
        summary: init.description,
        iconName: init.iconName,
        category: 'Flagship Initiative', // Default category
        date: 'Ongoing',
        isFeatured: false,
      };
      await client.createOrReplace(doc);
      console.log(`Created (Initiative -> Research): ${init.title}`);
    }

    // 3. Migrate Featured Paper
    const featDoc = {
      _id: `research-${researchData.featured.id}`,
      _type: 'researchPublication',
      title: researchData.featured.title,
      fullDescription: researchData.featured.fullDescription,
      category: researchData.featured.category,
      date: researchData.featured.date,
      imageRef: researchData.featured.imageRef,
      iconName: 'book-open', // Fallback icon
      isFeatured: true,
    };
    await client.createOrReplace(featDoc);
    console.log(`Created Featured Research: ${researchData.featured.title}`);

    // 4. Migrate Standard Publications
    for (const pub of researchData.publications) {
      const pubDoc = {
        _id: `research-${pub.id}`,
        _type: 'researchPublication',
        title: pub.title,
        fullDescription: pub.fullDescription,
        category: pub.category,
        date: pub.date,
        imageRef: pub.imageRef,
        iconName: 'file-text', // Fallback icon
        isFeatured: false,
      };
      await client.createOrReplace(pubDoc);
      console.log(`Created Research: ${pub.title}`);
    }

    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
