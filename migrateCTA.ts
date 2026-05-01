import { createClient } from '@sanity/client';
import { homeData } from './content/home';
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
  console.log('Migrating Global CTA data...');

  try {
    const ctaDoc = {
      _id: 'callToAction',
      _type: 'callToAction',
      heading: homeData.cta.heading,
      description: homeData.cta.subtext,
      primaryLabel: homeData.cta.primaryCTA.label,
      primaryHref: homeData.cta.primaryCTA.href,
      secondaryLabel: homeData.cta.secondaryCTA?.label || "",
      secondaryHref: homeData.cta.secondaryCTA?.href || "",
    };

    console.log('Creating CTA...');
    await client.createOrReplace(ctaDoc);
    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
