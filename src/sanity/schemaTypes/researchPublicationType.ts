import { defineField, defineType } from 'sanity'
export const researchPublicationType = defineType({
  name: 'researchPublication', title: 'Research Publication', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary / Description', type: 'text' }),
    defineField({ name: 'category', title: 'Category / Sector', type: 'string' }),
    defineField({ name: 'date', title: 'Date Published', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name (For Homepage Hub)', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Is Featured Paper?', type: 'boolean', initialValue: false }),
    defineField({ name: 'pdfUrl', title: 'PDF URL (or File)', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Cover Image URL', type: 'string' }),
  ],
})