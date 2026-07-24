import { defineField, defineType } from 'sanity'
export const solutionType = defineType({
  name: 'solution', title: 'Solution', type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'iconName', 
      title: 'Icon Name', 
      type: 'string',
      description: 'Lucide icon name (e.g. rocket, brain-circuit, landmark, graduation-cap, globe)'
    }),
    defineField({ 
      name: 'focusAreas', 
      title: 'Core Focus Areas (Bullets)', 
      type: 'array', 
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3).warning('Recommended to keep it to 3 focus areas.')
    }),
  ],
})