import { defineField, defineType } from 'sanity'
export const callToActionType = defineType({
  name: 'callToAction', title: 'Call To Action', type: 'document',
  fields: [
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'primaryLabel', title: 'Button Label', type: 'string' }),
    defineField({ name: 'primaryHref', title: 'URL Link', type: 'string' }),
  ],
})