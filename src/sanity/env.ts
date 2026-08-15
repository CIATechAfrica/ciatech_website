export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-18'

const fallbackProjectId = 'demo-project-id'
const fallbackDataset = 'production'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || fallbackDataset

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || fallbackProjectId

export const useCdn = false

