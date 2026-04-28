import { defineField, defineType } from 'sanity'
export const openRoleType = defineType({
  name: 'openRole', title: 'Open Role / Opportunity', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Role Title', type: 'string' }),
    defineField({ name: 'type', title: 'Role Type', type: 'string', description: 'e.g. Full-time, Fellowship' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'applyUrl', title: 'Application URL', type: 'string' }),
  ],
})