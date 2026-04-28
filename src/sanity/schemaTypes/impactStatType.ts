import { defineField, defineType } from 'sanity'
export const impactStatType = defineType({
  name: 'impactStat', title: 'Impact Stat', type: 'document',
  fields: [
    defineField({ name: 'value', title: 'Value', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
  ],
})