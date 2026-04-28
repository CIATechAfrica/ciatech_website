import { defineField, defineType } from 'sanity'
export const callToActionType = defineType({
  name: 'callToAction', title: 'Call To Action', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'primaryLabel', title: 'Primary Button Label', type: 'string' }),
    defineField({ name: 'primaryHref', title: 'Primary Button URL', type: 'string' }),
    defineField({ name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' }),
    defineField({ name: 'secondaryHref', title: 'Secondary Button URL', type: 'string' }),
  ],
})