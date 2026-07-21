import { defineField, defineType } from 'sanity'
export const contactInformationType = defineType({
  name: 'contactInformation', title: 'Contact Information', type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'globalHeadquarters',
      title: 'Global Headquarters',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'address', title: 'Physical Address', type: 'text' },
      ]
    }),
    defineField({
      name: 'subOffices',
      title: 'Sub-Offices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'city', title: 'City / Region', type: 'string' },
            { name: 'email', title: 'Email Address', type: 'string' },
            { name: 'phone', title: 'Phone Number', type: 'string' },
            { name: 'address', title: 'Physical Address', type: 'text' },
          ],
          preview: {
            select: {
              title: 'city',
              subtitle: 'email'
            }
          }
        }
      ]
    })
  ],
})