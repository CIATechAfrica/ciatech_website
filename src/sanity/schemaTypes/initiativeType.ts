import { defineField, defineType } from 'sanity'
export const initiativeType = defineType({
  name: 'initiative', title: 'Initiative', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'href', title: 'Link / URL', type: 'string' }),
  ],
})