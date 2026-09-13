import { defineField, defineType } from 'sanity'

export const boardMemberType = defineType({
  name: 'boardMember',
  title: 'Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
    {
      name: 'serialNumber',
      title: 'Serial Number (Sorting Order)',
      type: 'number',
      description: 'Used to sort the team. Lower numbers appear first (e.g. 1 for CEO, 2 for VP).',
      initialValue: 99,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
