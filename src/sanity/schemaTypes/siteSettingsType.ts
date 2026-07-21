import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      description: 'Configure the links in the top header',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'href', title: 'URL Route', type: 'string', validation: Rule => Rule.required() },
            {
              name: 'dropdown',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
                    { name: 'href', title: 'URL Route', type: 'string', validation: Rule => Rule.required() }
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'href'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href'
            }
          }
        }
      ]
    })
  ]
})
