import { defineField, defineType } from 'sanity'
export const solutionType = defineType({
  name: 'solution', title: 'Solution', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'focusAreas', title: 'Focus Areas', type: 'array', of: [{type: 'string'}] }),
  ],
})