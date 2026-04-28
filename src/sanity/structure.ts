import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('CIATECH Africa Content')
    .items([
      // Add items here later
      ...S.documentTypeListItems(),
    ])
