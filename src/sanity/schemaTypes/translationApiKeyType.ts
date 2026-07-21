import { defineField, defineType } from 'sanity'

export const translationApiKeyType = defineType({
  name: 'jexity.translationApiKey',
  title: 'Translation Webhook Secret',
  type: 'document',
  fields: [
    defineField({
      name: 'apiKey',
      title: 'Webhook Secret',
      description: 'Paste your SANITY_TRANSLATE_WEBHOOK_SECRET here so the plugin can securely trigger translations.',
      type: 'string',
    }),
  ],
})
