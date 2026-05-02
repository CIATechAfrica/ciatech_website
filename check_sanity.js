const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function check() {
  try {
    const docs = await client.fetch('*[_type == "contactSubmission"] | order(_createdAt desc)');
    console.log(`Found ${docs.length} contact submissions.`);
    if (docs.length > 0) {
      console.log('Most recent:', docs[0]);
    }
  } catch (err) {
    console.error('Error fetching:', err.message);
  }
}

check();
