import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('CIATECH Africa')
    .items([
      S.listItem()
        .title('Site Pages')
        .child(
          S.list()
            .title('Site Pages')
            .items([
              S.documentTypeListItem('homePage').title('Homepage'),
              S.documentTypeListItem('aboutPage').title('About Page'),
              S.documentTypeListItem('solutionsPage').title('Solutions Page'),
              S.documentTypeListItem('impactPage').title('Impact Page'),
              S.documentTypeListItem('researchPage').title('Research Page'),
              S.documentTypeListItem('galleryPage').title('Gallery Page'),
              S.documentTypeListItem('blogPage').title('Blog / Newsroom Page'),
              S.documentTypeListItem('opportunitiesPage').title('Opportunities Page'),
              S.documentTypeListItem('partnershipsPage').title('Partnerships Page'),
              S.documentTypeListItem('aboutSection').title('Homepage About Section'),
              S.documentTypeListItem('contactInformation').title('Contact Info'),
              S.documentTypeListItem('callToAction').title('Call To Action'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Collections & Hubs')
        .child(
          S.list()
            .title('Collections')
            .items([
              S.documentTypeListItem('corePillar').title('Core Pillars'),
              S.documentTypeListItem('solution').title('Solutions'),
              S.documentTypeListItem('impactStat').title('Impact Stats'),
              S.documentTypeListItem('impactArea').title('Impact Areas'),
              S.documentTypeListItem('partnerLogo').title('Partner Logos'),
              S.documentTypeListItem('teamMember').title('Team Members'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Publications & Opportunities')
        .child(
          S.list()
            .title('Publications')
            .items([
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.documentTypeListItem('researchPublication').title('Research Publications'),
              S.documentTypeListItem('openRole').title('Job Opportunities'),
              S.documentTypeListItem('galleryImage').title('Gallery Images'),
            ])
        ),
    ])
