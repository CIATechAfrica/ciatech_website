import { defineField, defineType } from 'sanity'
export const galleryImageType = defineType({
  name: 'galleryImage', title: 'Gallery Image', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Image URL or Reference', type: 'string' }),
    defineField({ name: 'span', title: 'Grid Span Class', type: 'string', description: 'e.g. md:col-span-2' }),
  ],
})