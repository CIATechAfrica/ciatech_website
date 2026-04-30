import { defineField, defineType } from 'sanity'
export const aboutSectionType = defineType({
  name: 'aboutSection', title: 'About Section', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subHeading', title: 'Sub-Heading', type: 'string' }),
    defineField({ name: 'mission', title: 'Mission Statement', type: 'text' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'imageRef', title: 'Legacy Image URL', type: 'string', hidden: true }),
    defineField({ 
      name: 'aboutImage', 
      title: 'About Section Image', 
      type: 'image', 
      options: { hotspot: true } 
    }),
    defineField({ name: 'linkLabel', title: 'Link Label', type: 'string' }),
    defineField({ name: 'linkHref', title: 'Link URL', type: 'string' }),
  ],
})