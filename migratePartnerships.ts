import { createClient } from '@sanity/client';
import { partnershipsData } from './content/partnerships';
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
  console.log('Migrating Partnerships Page Singleton...');

  try {
    const pageDoc = {
      _id: 'partnershipsPage',
      _type: 'partnershipsPage',
      seoTitle: partnershipsData.seo.title,
      seoDescription: partnershipsData.seo.description,
      heroHeading: partnershipsData.hero.heading,
      heroSubtext: partnershipsData.hero.subtext,
      directoryTitle: partnershipsData.directoryTitle,
      directorySubtext: partnershipsData.directorySubtext,
      ctaHeading: partnershipsData.cta.heading,
      ctaSubtext: partnershipsData.cta.subtext,
      ctaButtonLabel: partnershipsData.cta.button.label,
      ctaButtonHref: partnershipsData.cta.button.href,
    };
    await client.createOrReplace(pageDoc);
    console.log('Created Partnerships Page Singleton');
    
    console.log('Note: We skipped automating the partner logo image uploads. Please upload logos directly in the Sanity Studio.');
    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
