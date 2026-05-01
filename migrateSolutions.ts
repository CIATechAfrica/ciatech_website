import { createClient } from '@sanity/client';
import { solutionsData } from './content/solutions';
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
  console.log('Migrating Solutions data...');

  try {
    // 1. Create the Solutions Page Singleton
    const pageDoc = {
      _id: 'solutionsPage',
      _type: 'solutionsPage',
      seoTitle: solutionsData.seo.title,
      seoDescription: solutionsData.seo.description,
      heroHeading: solutionsData.hero.heading,
      heroSubtext: solutionsData.hero.subtext,
      introTitle: solutionsData.introTitle,
      introSubtext: solutionsData.introSubtext,
    };
    await client.createOrReplace(pageDoc);
    console.log('Solutions Page Singleton Created.');

    // 2. Create the Solutions Collection Items
    for (const [index, solution] of solutionsData.solutions.entries()) {
      const solutionDoc = {
        _id: `solution-${solution.id}`,
        _type: 'solution',
        title: solution.title,
        description: solution.description,
        iconName: solution.iconName,
        focusAreas: solution.features,
      };
      await client.createOrReplace(solutionDoc);
      console.log(`Created Solution: ${solution.title}`);
    }

    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
