import { defineField, defineType } from 'sanity'
export const contactInformationType = defineType({
  name: 'contactInformation', title: 'Contact Information', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
  ],
})