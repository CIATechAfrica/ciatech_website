import { createClient } from '@sanity/client';
import { aboutData } from './content/about';
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
  console.log('Migrating About Page data...');

  try {
    const aboutPageDoc = {
      _id: 'aboutPage',
      _type: 'aboutPage',
      seoTitle: aboutData.seo.title,
      seoDescription: aboutData.seo.description,
      heroTitle: aboutData.header.title,
      heroSubtitle: aboutData.header.subtitle,
      ourStoryHeading: aboutData.ourStory.heading,
      ourStoryContent: aboutData.ourStory.content,
      visionTitle: aboutData.missionVision.vision.title,
      visionContent: aboutData.missionVision.vision.content,
      missionTitle: aboutData.missionVision.mission.title,
      missionContent: aboutData.missionVision.mission.content,
      teamHeading: aboutData.team.heading,
      teamSubtext: aboutData.team.subtext,
    };

    console.log('Creating About Page...');
    await client.createOrReplace(aboutPageDoc);

    console.log('Creating Team Members...');
    for (const [index, member] of aboutData.team.members.entries()) {
      await client.create({
        _type: 'teamMember',
        name: member.name,
        role: member.role,
        linkedin: member.linkedin,
        orderRank: index,
      });
      console.log(`- Created team member: ${member.name}`);
    }

    console.log('Migration Complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
