import { defineField, defineType } from 'sanity'

export const opportunitiesPageType = defineType({
  name: 'opportunitiesPage',
  title: 'Opportunities Page',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'text' }),
    defineField({ name: 'fellowshipsTitle', title: 'Fellowships Title', type: 'string' }),
    defineField({ name: 'fellowshipsSubtext', title: 'Fellowships Subtext', type: 'text' }),
    defineField({ name: 'careersTitle', title: 'Careers Title', type: 'string' }),
    defineField({ name: 'careersSubtext', title: 'Careers Subtext', type: 'text' })
  ],
})
