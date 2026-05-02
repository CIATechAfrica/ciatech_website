import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('CIATECH Africa')
    .items([
      S.listItem()
        .title('🏠 Homepage')
        .child(
          S.list()
            .title('Homepage Configuration')
            .items([
              S.documentTypeListItem('homePage').title('Homepage Settings (SEO & Hero)'),
              S.documentTypeListItem('aboutSection').title('Homepage About Section'),
              S.documentTypeListItem('corePillar').title('Core Pillars'),
              S.documentTypeListItem('callToAction').title('Call To Action (Global CTA)'),
            ])
        ),
      S.divider(),
      
      S.listItem()
        .title('💡 About Us')
        .child(
          S.list()
            .title('About Us')
            .items([
              S.documentTypeListItem('aboutPage').title('About Page Settings'),
              S.documentTypeListItem('teamMember').title('Team Members'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('⚙️ Solutions')
        .child(
          S.list()
            .title('Solutions')
            .items([
              S.documentTypeListItem('solutionsPage').title('Solutions Page Settings'),
              S.documentTypeListItem('solution').title('Solutions Content'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('🌍 Impact')
        .child(
          S.list()
            .title('Impact')
            .items([
              S.documentTypeListItem('impactPage').title('Impact Page Settings'),
              S.documentTypeListItem('impactArea').title('Impact Areas'),
              S.documentTypeListItem('impactStat').title('Impact Stats'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('🔬 Research')
        .child(
          S.list()
            .title('Research')
            .items([
              S.documentTypeListItem('researchPage').title('Research Page Settings'),
              S.documentTypeListItem('researchPublication').title('Research Publications'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('🤝 Partnerships')
        .child(
          S.list()
            .title('Partnerships')
            .items([
              S.documentTypeListItem('partnershipsPage').title('Partnerships Page Settings'),
              S.documentTypeListItem('partnerLogo').title('Partner Logos'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('📰 Media & News')
        .child(
          S.list()
            .title('Media & News')
            .items([
              S.documentTypeListItem('blogPage').title('Blog / Newsroom Settings'),
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.divider(),
              S.documentTypeListItem('galleryPage').title('Gallery Page Settings'),
              S.documentTypeListItem('galleryImage').title('Gallery Images'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('💼 Careers & Fellowships')
        .child(
          S.list()
            .title('Careers & Fellowships')
            .items([
              S.documentTypeListItem('opportunitiesPage').title('Opportunities Page Settings'),
              S.documentTypeListItem('openRole').title('Job Opportunities'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('📥 Inbox & Submissions')
        .child(
          S.list()
            .title('Inbox & Submissions')
            .items([
              S.documentTypeListItem('contactSubmission').title('Contact Messages'),
              S.documentTypeListItem('applicationSubmission').title('Opportunity Applications'),
              S.documentTypeListItem('newsletterSubscriber').title('Newsletter Subscribers'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('⚙️ Global Settings')
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.documentTypeListItem('contactInformation').title('Contact Information'),
            ])
        ),
    ])
