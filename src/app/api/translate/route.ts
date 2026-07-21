import { type NextRequest } from 'next/server';
import { TranslationService } from 'sanity-plugin-translate/service';
import { translationApiRequestBody, FieldKeyConfig } from 'sanity-plugin-translate/types';
import { createClient } from '@sanity/client';

const fieldKeyConfig: FieldKeyConfig = {
  customTranslatableFieldKeys: [
    "seoTitle", "seoDescription", "heroTitle", "heroSubtitle", "ourStoryHeading", "ourStoryContent",
    "visionTitle", "visionContent", "missionTitle", "missionContent", "teamHeading", "teamSubtext",
    "heading", "description", "linkLabel", "name", "roleAppliedFor", "coverLetter", "heroHeading",
    "heroSubtext", "feedTitle", "title", "snippet", "content", "author", "role", "primaryLabel",
    "city", "company", "subject", "message", "gridTitle", "heroBadge", "heroHeadline", "introTitle",
    "introSubtext", "areasTitle", "value", "label", "category", "type", "fellowshipsTitle",
    "fellowshipsSubtext", "careersTitle", "careersSubtext", "directoryTitle", "directorySubtext",
    "ctaHeading", "ctaSubtext", "ctaButtonLabel", "altText", "publicationsTitle", "fullDescription", "navItem"
  ],
  customTranslatableArrayFieldKeys: [
    "subOffices", "methodology", "mainNavigation", "dropdown", "focusAreas"
  ],
  excludeDefaultFieldKeys: [],
  excludeDefaultArrayFieldKeys: [],
};

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const webhook_secret = req.headers.get('x-webhook-secret');
  if (
    !webhook_secret ||
    webhook_secret !== process.env.SANITY_TRANSLATE_WEBHOOK_SECRET
  ) {
    return new Response(JSON.stringify({ error: 'Invalid webhook secret' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  const body = await req.json();
  const parsedBody = translationApiRequestBody.safeParse(body);
  if (!parsedBody.success) {
    return new Response('Invalid body', { status: 400 });
  }

  const data = parsedBody.data;

  if (!process.env.DEEPL_API_KEY && !process.env.NEXT_PUBLIC_DEEPL_API_KEY) {
    return new Response(JSON.stringify({ error: 'Missing DEEPL_API_KEY in environment variables' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
    apiVersion: '2024-04-18'
  });

  const translator = new TranslationService({
    client,
    deeplApiKey: process.env.DEEPL_API_KEY || process.env.NEXT_PUBLIC_DEEPL_API_KEY || '',
    fieldKeyConfig,
  });

  try {
    const { translatedJsonData, isTranslated } = await translator.translateDocument({
      data,
    });

    return new Response(
      JSON.stringify({
        isTranslated,
        translatedTexts: translatedJsonData,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Translation error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
