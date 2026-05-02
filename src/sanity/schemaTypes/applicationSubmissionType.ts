import { defineField, defineType } from 'sanity'
import { Briefcase } from 'lucide-react'

export const applicationSubmissionType = defineType({
  name: 'applicationSubmission',
  title: 'Opportunity Application',
  type: 'document',
  icon: Briefcase,
  readOnly: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'roleAppliedFor',
      title: 'Role / Opportunity',
      type: 'string',
    }),
    defineField({
      name: 'portfolioUrl',
      title: 'Portfolio / LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'coverLetter',
      title: 'Cover Letter / Bio',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Under Review', value: 'reviewing' },
          { title: 'Interviewing', value: 'interviewing' },
          { title: 'Rejected', value: 'rejected' },
          { title: 'Accepted', value: 'accepted' },
        ],
      },
      initialValue: 'new',
      readOnly: false,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'roleAppliedFor',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title: `${title} (${status})`,
        subtitle: subtitle,
      }
    },
  },
})
