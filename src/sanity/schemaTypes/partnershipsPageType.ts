import { defineField, defineType } from 'sanity'

export const partnershipsPageType = defineType({
  name: 'partnershipsPage',
  title: 'Partnerships Page',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'text' }),
    defineField({ name: 'directoryTitle', title: 'Directory Title', type: 'string' }),
    defineField({ name: 'directorySubtext', title: 'Directory Subtext', type: 'text' }),
    defineField({ name: 'ctaHeading', title: 'CTA Heading', type: 'string' }),
    defineField({ name: 'ctaSubtext', title: 'CTA Subtext', type: 'text' }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA Button Link', type: 'string' })
  ],
})
