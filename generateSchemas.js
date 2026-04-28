const fs = require('fs');
const path = require('path');

const schemasDir = path.join(__dirname, 'src/sanity/schemaTypes');

const schemas = {
  corePillar: `import { defineField, defineType } from 'sanity'
export const corePillarType = defineType({
  name: 'corePillar', title: 'Core Pillar', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Name of the react-icon (e.g. FaGlobeAfrica)' }),
  ],
})`,

  solution: `import { defineField, defineType } from 'sanity'
export const solutionType = defineType({
  name: 'solution', title: 'Solution', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'focusAreas', title: 'Focus Areas', type: 'array', of: [{type: 'string'}] }),
  ],
})`,

  initiative: `import { defineField, defineType } from 'sanity'
export const initiativeType = defineType({
  name: 'initiative', title: 'Initiative', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'items', title: 'Items', type: 'array', of: [{type: 'string'}] }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'href', title: 'Link / URL', type: 'string' }),
  ],
})`,

  impactStat: `import { defineField, defineType } from 'sanity'
export const impactStatType = defineType({
  name: 'impactStat', title: 'Impact Stat', type: 'document',
  fields: [
    defineField({ name: 'value', title: 'Value', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
  ],
})`,

  galleryImage: `import { defineField, defineType } from 'sanity'
export const galleryImageType = defineType({
  name: 'galleryImage', title: 'Gallery Image', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Image URL or Reference', type: 'string' }),
    defineField({ name: 'span', title: 'Grid Span Class', type: 'string', description: 'e.g. md:col-span-2' }),
  ],
})`,

  partnerLogo: `import { defineField, defineType } from 'sanity'
export const partnerLogoType = defineType({
  name: 'partnerLogo', title: 'Partner Logo', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner Name', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Logo Image URL', type: 'string' }),
  ],
})`,

  aboutSection: `import { defineField, defineType } from 'sanity'
export const aboutSectionType = defineType({
  name: 'aboutSection', title: 'About Section', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subHeading', title: 'Sub-Heading', type: 'string' }),
    defineField({ name: 'mission', title: 'Mission Statement', type: 'text' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'imageRef', title: 'Image Reference', type: 'string' }),
    defineField({ name: 'linkLabel', title: 'Link Label', type: 'string' }),
    defineField({ name: 'linkHref', title: 'Link URL', type: 'string' }),
  ],
})`,

  contactInformation: `import { defineField, defineType } from 'sanity'
export const contactInformationType = defineType({
  name: 'contactInformation', title: 'Contact Information', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
  ],
})`,

  callToAction: `import { defineField, defineType } from 'sanity'
export const callToActionType = defineType({
  name: 'callToAction', title: 'Call To Action', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'primaryLabel', title: 'Primary Button Label', type: 'string' }),
    defineField({ name: 'primaryHref', title: 'Primary Button URL', type: 'string' }),
    defineField({ name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' }),
    defineField({ name: 'secondaryHref', title: 'Secondary Button URL', type: 'string' }),
  ],
})`,

  researchPublication: `import { defineField, defineType } from 'sanity'
export const researchPublicationType = defineType({
  name: 'researchPublication', title: 'Research Publication', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'description', title: 'Full Description', type: 'text' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'date', title: 'Date Published', type: 'string' }),
    defineField({ name: 'pdfUrl', title: 'PDF URL (or File)', type: 'string' }),
    defineField({ name: 'imageRef', title: 'Cover Image URL', type: 'string' }),
  ],
})`,

  blogPost: `import { defineField, defineType } from 'sanity'
export const blogPostType = defineType({
  name: 'blogPost', title: 'Blog Post', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'snippet', title: 'Snippet', type: 'text' }),
    defineField({ name: 'content', title: 'Content Body', type: 'text' }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string' }),
    defineField({ name: 'thumbnailRef', title: 'Thumbnail Image URL', type: 'string' }),
  ],
})`,

  openRole: `import { defineField, defineType } from 'sanity'
export const openRoleType = defineType({
  name: 'openRole', title: 'Open Role / Opportunity', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Role Title', type: 'string' }),
    defineField({ name: 'type', title: 'Role Type', type: 'string', description: 'e.g. Full-time, Fellowship' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'applyUrl', title: 'Application URL', type: 'string' }),
  ],
})`
};

for (const [key, code] of Object.entries(schemas)) {
  fs.writeFileSync(path.join(schemasDir, key + 'Type.ts'), code);
}
console.log('Successfully created all 12 Sanity schemas.');
