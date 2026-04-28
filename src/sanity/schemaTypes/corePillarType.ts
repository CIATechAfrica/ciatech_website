import { defineField, defineType } from 'sanity'
export const corePillarType = defineType({
  name: 'corePillar', title: 'Core Pillar', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Name of the react-icon (e.g. FaGlobeAfrica)' }),
  ],
})