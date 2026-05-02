const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function testWrite() {
  try {
    console.log("Attempting to write to Sanity...");
    const result = await client.create({
      _type: 'contactSubmission',
      name: 'API Test',
      email: 'test@example.com',
      company: 'Test Co',
      subject: 'Test Subject',
      message: 'Test Message',
      status: 'unread',
      submittedAt: new Date().toISOString(),
    });
    console.log("Success! ID:", result._id);
    
    // Clean up
    await client.delete(result._id);
    console.log("Cleaned up document.");
  } catch (err) {
    console.error("Write failed:", err.message);
  }
}

testWrite();
