import { defineField, defineType } from 'sanity'
export const partnerLogoType = defineType({
  name: 'partnerLogo', title: 'Partner Logo', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner Name', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Logo Image URL', type: 'string' }),
  ],
})