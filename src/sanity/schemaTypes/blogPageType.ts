import { defineField, defineType } from 'sanity'

export const blogPageType = defineType({
  name: 'blogPage',
  title: 'Blog / Newsroom Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'text' }),
    defineField({ name: 'feedTitle', title: 'Feed Title', type: 'string', initialValue: 'Latest Dispatches' }),
  ],
})
