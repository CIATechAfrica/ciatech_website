import { createClient } from '@sanity/client';
import { opportunitiesData } from './content/opportunities';
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
  console.log('Migrating Opportunities Data...');

  try {
    // 1. Migrate Fellowships
    for (const role of opportunitiesData.fellowships) {
      const doc = {
        _id: `role-${role.id}`,
        _type: 'openRole',
        title: role.title,
        category: 'Fellowship',
        type: role.type,
        location: role.location,
        description: role.description,
        applyUrl: role.applyUrl || 'https://google.com/forms'
      };
      await client.createOrReplace(doc);
      console.log(`Created Fellowship: ${role.title}`);
    }

    // 2. Migrate Careers
    for (const role of opportunitiesData.careers) {
      const doc = {
        _id: `role-${role.id}`,
        _type: 'openRole',
        title: role.title,
        category: 'Career',
        type: role.type,
        location: role.location,
        description: role.description,
        applyUrl: role.applyUrl || 'https://google.com/forms'
      };
      await client.createOrReplace(doc);
      console.log(`Created Career: ${role.title}`);
    }

    // 3. Create Opportunities Page Singleton
    const pageDoc = {
      _id: 'opportunitiesPage',
      _type: 'opportunitiesPage',
      seoTitle: opportunitiesData.seo.title,
      seoDescription: opportunitiesData.seo.description,
      heroHeading: opportunitiesData.hero.heading,
      heroSubtext: opportunitiesData.hero.subtext,
      fellowshipsTitle: opportunitiesData.fellowshipsTitle,
      fellowshipsSubtext: opportunitiesData.fellowshipsSubtext,
      careersTitle: opportunitiesData.careersTitle,
      careersSubtext: opportunitiesData.careersSubtext
    };
    await client.createOrReplace(pageDoc);
    console.log('Created Opportunities Page Singleton');

    console.log('Opportunities Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
