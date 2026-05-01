import { defineField, defineType } from 'sanity'
export const galleryImageType = defineType({
  name: 'galleryImage', title: 'Gallery Image', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'isHubVisible',
      title: 'Show on Homepage Hub?',
      type: 'boolean',
      initialValue: false,
      description: 'Check this to display this image on the homepage.'
    }),
    defineField({
      name: 'gridSize',
      title: 'Grid Size',
      type: 'string',
      options: {
        list: [
          { title: 'Standard (1x1)', value: 'col-span-1' },
          { title: 'Wide (2x1)', value: 'col-span-1 md:col-span-2' },
          { title: 'Large Square (2x2)', value: 'col-span-1 md:col-span-2 row-span-2 min-h-[300px]' },
          { title: 'Extra Wide (3x1)', value: 'col-span-1 lg:col-span-3' }
        ],
        layout: 'radio'
      },
      initialValue: 'col-span-1',
      description: 'Choose how much space this image should take up in the masonry grid.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image'
    }
  }
})