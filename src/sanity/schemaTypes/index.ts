import { type SchemaTypeDefinition } from 'sanity'
import { homeType } from './homeType'
import { corePillarType } from './corePillarType'
import { solutionType } from './solutionType'
import { impactStatType } from './impactStatType'
import { galleryImageType } from './galleryImageType'
import { partnerLogoType } from './partnerLogoType'
import { aboutSectionType } from './aboutSectionType'
import { contactInformationType } from './contactInformationType'
import { callToActionType } from './callToActionType'
import { researchPublicationType } from './researchPublicationType'
import { blogPostType } from './blogPostType'
import { openRoleType } from './openRoleType'
import { aboutPageType } from './aboutPageType'
import { teamMemberType } from './teamMemberType'
import { solutionsPageType } from './solutionsPageType'
import { impactAreaType } from './impactAreaType'
import { impactPageType } from './impactPageType'
import { researchPageType } from './researchPageType'
import { galleryPageType } from './galleryPageType'
import { blogPageType } from './blogPageType'
import { opportunitiesPageType } from './opportunitiesPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    corePillarType,
    solutionType,
    impactStatType,
    galleryImageType,
    partnerLogoType,
    aboutSectionType,
    contactInformationType,
    callToActionType,
    researchPublicationType,
    blogPostType,
    openRoleType,
    aboutPageType,
    teamMemberType,
    solutionsPageType,
    impactAreaType,
    impactPageType,
    researchPageType,
    galleryPageType,
    blogPageType,
    opportunitiesPageType
  ],
}
