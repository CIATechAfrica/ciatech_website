import { defineField, defineType } from 'sanity'

export const popupSettingsType = defineType({
  name: 'popupSettings',
  title: 'Popup Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'isActive',
      title: 'Enable Popup',
      type: 'boolean',
      description: 'Turn the marketing popup on or off globally.',
      initialValue: false,
    }),
    defineField({
      name: 'popupImage',
      title: 'Popup Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'altText',
      title: 'Accessibility Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'targetLink',
      title: 'Target Link (Optional)',
      type: 'url',
      description: 'Where should the user go when they click the popup?',
    }),
  ],
})
