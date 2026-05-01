import { defineField, defineType } from 'sanity'
export const partnerLogoType = defineType({
  name: 'partnerLogo', title: 'Partner Logo', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner Name', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { 
        list: [
          'Government & Civic Institutions', 
          'Multilateral & UN Agencies', 
          'Academic Institutions', 
          'Private Sector Leaders'
        ], 
        layout: 'radio' 
      },
      initialValue: 'Government & Civic Institutions'
    }),
    defineField({ 
      name: 'logo', 
      title: 'Partner Logo', 
      type: 'image',
      options: { hotspot: true }
    }),
  ],
})