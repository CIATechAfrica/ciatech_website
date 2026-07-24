import { defineField, defineType } from 'sanity'
export const researchPublicationType = defineType({
  name: 'researchPublication', title: 'Research Publication', type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'fullDescription', title: 'Description / Full Note', type: 'text' }),
    defineField({ name: 'category', title: 'Category / Sector', type: 'string' }),
    defineField({ name: 'date', title: 'Date Published', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name (For Homepage Hub)', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Is Featured Paper?', type: 'boolean', initialValue: false }),
    defineField({ 
      name: 'coverImage', 
      title: 'Cover Image', 
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the cover image for the Research Page.'
    }),
  ],
})