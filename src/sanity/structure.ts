import type {StructureResolver} from 'sanity/structure'
import { 
  Home, 
  Info, 
  Briefcase, 
  Target, 
  FlaskConical, 
  Handshake, 
  Newspaper, 
  Image as ImageIcon, 
  Users,
  Settings,
  Mail,
  FileText,
  UserPlus
} from 'lucide-react'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('CIATECH Africa')
    .items([
      
      // SECTION: PAGES & LAYOUT
      S.listItem()
        .title('Pages & Layout')
        .icon(FileText)
        .child(
          S.list()
            .title('Pages & Layout')
            .items([
              S.listItem()
                .title('Homepage')
                .icon(Home)
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
              S.listItem()
                .title('About Us Page')
                .icon(Info)
                .child(
                  S.list()
                    .title('About Us')
                    .items([
                      S.documentTypeListItem('aboutPage').title('About Page Settings'),
                      S.documentTypeListItem('teamMember').title('Team Members'),
                    ])
                ),
              S.listItem()
                .title('Solutions Page')
                .icon(Briefcase)
                .child(
                  S.list()
                    .title('Solutions')
                    .items([
                      S.documentTypeListItem('solutionsPage').title('Solutions Page Settings'),
                      S.documentTypeListItem('solution').title('Solutions Content'),
                    ])
                ),
              S.listItem()
                .title('Impact Page')
                .icon(Target)
                .child(
                  S.list()
                    .title('Impact')
                    .items([
                      S.documentTypeListItem('impactPage').title('Impact Page Settings'),
                      S.documentTypeListItem('impactArea').title('Impact Areas'),
                      S.documentTypeListItem('impactStat').title('Impact Stats'),
                    ])
                ),
              S.listItem()
                .title('Research Page')
                .icon(FlaskConical)
                .child(
                  S.list()
                    .title('Research')
                    .items([
                      S.documentTypeListItem('researchPage').title('Research Page Settings'),
                      S.documentTypeListItem('researchPublication').title('Research Publications'),
                    ])
                ),
              S.listItem()
                .title('Partnerships Page')
                .icon(Handshake)
                .child(
                  S.list()
                    .title('Partnerships')
                    .items([
                      S.documentTypeListItem('partnershipsPage').title('Partnerships Page Settings'),
                      S.documentTypeListItem('partnerLogo').title('Partner Logos'),
                    ])
                ),
              S.listItem()
                .title('Opportunities Page')
                .icon(Users)
                .child(
                  S.list()
                    .title('Careers & Fellowships')
                    .items([
                      S.documentTypeListItem('opportunitiesPage').title('Opportunities Page Settings'),
                      S.documentTypeListItem('openRole').title('Job Opportunities'),
                    ])
                ),
            ])
        ),

      S.divider(),

      // SECTION: CONTENT & MEDIA
      S.listItem()
        .title('Content & Media')
        .icon(Newspaper)
        .child(
          S.list()
            .title('Content & Media')
            .items([
              S.listItem()
                .title('Newsroom (Blog)')
                .icon(Newspaper)
                .child(
                  S.list()
                    .title('Media & News')
                    .items([
                      S.documentTypeListItem('blogPage').title('Blog / Newsroom Settings'),
                      S.documentTypeListItem('blogPost').title('Blog Posts'),
                    ])
                ),
              S.listItem()
                .title('Gallery')
                .icon(ImageIcon)
                .child(
                  S.list()
                    .title('Gallery')
                    .items([
                      S.documentTypeListItem('galleryPage').title('Gallery Page Settings'),
                      S.documentTypeListItem('galleryImage').title('Gallery Images'),
                    ])
                ),
            ])
        ),

      S.divider(),

      // SECTION: INBOX & SUBMISSIONS
      S.listItem()
        .title('Inbox & Submissions')
        .icon(Mail)
        .child(
          S.list()
            .title('Inbox & Submissions')
            .items([
              S.documentTypeListItem('contactSubmission').title('Contact Messages'),
              S.documentTypeListItem('applicationSubmission').title('Opportunity Applications'),
              S.documentTypeListItem('newsletterSubscriber').title('Newsletter Subscribers').icon(UserPlus),
            ])
        ),

      S.divider(),

      // SECTION: SETTINGS
      S.listItem()
        .title('Global Settings')
        .icon(Settings)
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.documentTypeListItem('contactInformation').title('Contact Information'),
            ])
        ),
    ])
