import { defineField, defineType } from 'sanity'
export const blogPostType = defineType({
  name: 'blogPost', title: 'Blog Post', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'snippet', title: 'Snippet', type: 'text' }),
    defineField({ name: 'content', title: 'Content Body', type: 'text' }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date', options: { dateFormat: 'MMMM D, YYYY' } }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string' }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true }
    }),
  ],
})