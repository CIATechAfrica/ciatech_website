import { type SchemaTypeDefinition } from 'sanity'
import { homeType } from './homeType'
import { corePillarType } from './corePillarType'
import { solutionType } from './solutionType'
import { initiativeType } from './initiativeType'
import { impactStatType } from './impactStatType'
import { galleryImageType } from './galleryImageType'
import { partnerLogoType } from './partnerLogoType'
import { aboutSectionType } from './aboutSectionType'
import { contactInformationType } from './contactInformationType'
import { callToActionType } from './callToActionType'
import { researchPublicationType } from './researchPublicationType'
import { blogPostType } from './blogPostType'
import { openRoleType } from './openRoleType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    corePillarType,
    solutionType,
    initiativeType,
    impactStatType,
    galleryImageType,
    partnerLogoType,
    aboutSectionType,
    contactInformationType,
    callToActionType,
    researchPublicationType,
    blogPostType,
    openRoleType
  ],
}
