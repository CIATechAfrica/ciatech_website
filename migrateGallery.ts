import { createClient } from '@sanity/client';
import { homeData } from './content/home';
import { galleryData } from './content/gallery';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper function to map old CSS string to new Grid Size Dropdown
function mapSpanToGridSize(span: string | undefined): string {
  if (!span) return 'col-span-1';
  if (span.includes('row-span-2')) return 'col-span-1 md:col-span-2 row-span-2 min-h-[300px]';
  if (span.includes('col-span-3')) return 'col-span-1 lg:col-span-3';
  if (span.includes('col-span-2')) return 'col-span-1 md:col-span-2';
  return 'col-span-1';
}

async function migrate() {
  console.log('Migrating Gallery Data...');

  try {
    // 1. Create Gallery Page Singleton
    const pageDoc = {
      _id: 'galleryPage',
      _type: 'galleryPage',
      seoTitle: galleryData.seo.title,
      seoDescription: galleryData.seo.description,
      heroHeading: galleryData.hero.heading,
      heroSubtext: galleryData.hero.subtext,
      gridTitle: galleryData.gridTitle,
    };
    await client.createOrReplace(pageDoc);
    console.log('Created Gallery Page Singleton');

    // 2. Migrate Homepage Hub Images
    for (const img of homeData.galleryTeaser.images) {
      const doc = {
        _id: `gallery-hub-${img.id}`,
        _type: 'galleryImage',
        title: img.title,
        location: img.location,
        date: img.date,
        gridSize: mapSpanToGridSize(img.span),
        isHubVisible: true
      };
      await client.createOrReplace(doc);
      console.log(`Created (Hub Image): ${img.title}`);
    }

    // 3. Migrate Gallery Spoke Images
    for (const img of galleryData.images) {
      const doc = {
        _id: `gallery-spoke-${img.id}`,
        _type: 'galleryImage',
        title: img.title,
        location: img.location,
        date: img.date,
        gridSize: mapSpanToGridSize(img.span),
        isHubVisible: false
      };
      await client.createOrReplace(doc);
      console.log(`Created (Spoke Image): ${img.title}`);
    }

    console.log('Gallery Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
