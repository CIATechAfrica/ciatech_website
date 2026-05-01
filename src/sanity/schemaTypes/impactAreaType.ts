import { defineField, defineType } from 'sanity'

export const impactAreaType = defineType({
  name: 'impactArea',
  title: 'Strategic Impact Area',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'iconName', 
      title: 'Icon Name', 
      type: 'string',
      description: 'Lucide icon name (e.g. landmark, laptop, tree-pine, shield-check)'
    }),
    defineField({ 
      name: 'methodology', 
      title: 'Execution Methodology (Bulletins)', 
      type: 'array', 
      of: [{type: 'string'}] 
    }),
  ],
})
