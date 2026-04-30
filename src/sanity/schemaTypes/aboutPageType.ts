import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'ourStoryHeading',
      title: 'Our Story Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'ourStoryContent',
      title: 'Our Story Content',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'visionContent',
      title: 'Vision Content',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'missionContent',
      title: 'Mission Content',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'teamHeading',
      title: 'Team Directory Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'teamSubtext',
      title: 'Team Directory Subtext',
      type: 'text',
      group: 'content',
    }),
  ],
  groups: [
    { name: 'seo', title: 'SEO Details' },
    { name: 'content', title: 'Page Content', default: true },
  ],
})
