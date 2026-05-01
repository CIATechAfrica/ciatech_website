import { defineField, defineType } from 'sanity'
export const researchPublicationType = defineType({
  name: 'researchPublication', title: 'Research Publication', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary (Card View)', type: 'text' }),
    defineField({ name: 'fullDescription', title: 'Full Description (Modal & PDF)', type: 'text' }),
    defineField({ name: 'category', title: 'Category / Sector', type: 'string' }),
    defineField({ name: 'date', title: 'Date Published', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name (For Homepage Hub)', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Is Featured Paper?', type: 'boolean', initialValue: false }),
    defineField({ 
      name: 'pdfFile', 
      title: 'Upload Full PDF Report', 
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Upload the actual PDF file for users to download.'
    }),
    defineField({ 
      name: 'coverImage', 
      title: 'Cover Image', 
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the cover image for the Research Page.'
    }),
  ],
})