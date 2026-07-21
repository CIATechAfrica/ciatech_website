import { defineField, defineType } from 'sanity'

export const solutionsPageType = defineType({
  name: 'solutionsPage',
  title: 'Solutions Page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'intro', title: 'Intro Section' }
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Badge Title',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'introSubtext',
      title: 'Intro Subtext',
      type: 'text',
      group: 'intro',
    }),
  ],
})
