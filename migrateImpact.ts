import { createClient } from '@sanity/client';
import { impactData } from './content/impact';
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
  console.log('Migrating Impact data...');

  try {
    // 1. Create the Impact Page Singleton
    const pageDoc = {
      _id: 'impactPage',
      _type: 'impactPage',
      seoTitle: impactData.seo.title,
      seoDescription: impactData.seo.description,
      heroHeading: impactData.hero.heading,
      heroSubtext: impactData.hero.subtext,
      introTitle: impactData.introTitle,
      introSubtext: impactData.introSubtext,
      areasTitle: impactData.areasTitle,
    };
    await client.createOrReplace(pageDoc);
    console.log('Impact Page Singleton Created.');

    // 2. Create the Impact Stats (Metrics)
    for (const stat of impactData.stats) {
      const statDoc = {
        _id: `impactStat-${stat.id}`,
        _type: 'impactStat',
        value: stat.value,
        label: stat.label,
        iconName: stat.iconName,
      };
      await client.createOrReplace(statDoc);
      console.log(`Created Impact Stat: ${stat.label}`);
    }

    // 3. Create the Impact Areas (Strategic Breakdowns)
    for (const area of impactData.impactAreas) {
      const areaDoc = {
        _id: `impactArea-${area.id}`,
        _type: 'impactArea',
        title: area.title,
        description: area.description,
        iconName: area.iconName,
        methodology: area.methodology,
      };
      await client.createOrReplace(areaDoc);
      console.log(`Created Impact Area: ${area.title}`);
    }

    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
