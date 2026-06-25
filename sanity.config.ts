'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {StudioLogo} from './src/sanity/StudioLogo'

const myTheme = buildLegacyTheme({
  /* Brand colors */
  '--brand-primary': '#E2AD00', // CIATech Gold

  /* Default button */
  '--default-button-color': '#0f172a',
  '--default-button-primary-color': '#E2AD00',
  '--default-button-success-color': '#10b981',
  '--default-button-warning-color': '#f59e0b',
  '--default-button-danger-color': '#ef4444',

  /* State */
  '--state-info-color': '#E2AD00',
  '--state-success-color': '#10b981',
  '--state-warning-color': '#f59e0b',
  '--state-danger-color': '#ef4444',

  /* Navbar */
  '--main-navigation-color': '#0f172a', // Slate dark
  '--main-navigation-color--inverted': '#ffffff',

  /* Focus */
  '--focus-color': '#E2AD00',
});

import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  plugins: [
    structureTool({structure}),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'}
      ],
      schemaTypes: [
        'homePage',
        'aboutPage',
        'solutionsPage',
        'impactPage',
        'researchPage',
        'galleryPage',
        'blogPage',
        'opportunitiesPage',
        'partnershipsPage',
        'contactInformation',
        'siteSettings',
        'aboutSection',
        'callToAction'
      ]
    })
  ],
})
