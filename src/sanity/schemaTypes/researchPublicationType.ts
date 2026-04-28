import { defineField, defineType } from 'sanity'
export const researchPublicationType = defineType({
  name: 'researchPublication', title: 'Research Publication', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'description', title: 'Full Description', type: 'text' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'date', title: 'Date Published', type: 'string' }),
    defineField({ name: 'pdfUrl', title: 'PDF URL (or File)', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Cover Image URL', type: 'string' }),
  ],
})