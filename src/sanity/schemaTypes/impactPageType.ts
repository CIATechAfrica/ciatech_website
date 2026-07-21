import { defineField, defineType } from 'sanity'

export const impactPageType = defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'metrics', title: 'Metrics Section' },
    { name: 'areas', title: 'Impact Areas Section' }
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
      title: 'Metrics Intro Title',
      type: 'string',
      group: 'metrics',
    }),
    defineField({
      name: 'introSubtext',
      title: 'Metrics Intro Subtext',
      type: 'text',
      group: 'metrics',
    }),
    defineField({
      name: 'areasTitle',
      title: 'Impact Areas Section Title',
      type: 'string',
      group: 'areas',
    }),
  ],
})
