import { defineField, defineType } from 'sanity'
import { Mail } from 'lucide-react'

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'Contact Form Submission',
  type: 'document',
  icon: Mail,
  readOnly: true, // Generally, submissions shouldn't be edited by admins
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
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New (Unread)', value: 'unread' },
          { title: 'Read', value: 'read' },
          { title: 'Replied', value: 'replied' },
        ],
      },
      initialValue: 'unread',
      readOnly: false, // Allow admins to update the status
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
      subtitle: 'subject',
      status: 'status',
      date: 'submittedAt',
    },
    prepare({ title, subtitle, status, date }) {
      const isUnread = status === 'unread';
      const statusIcon = isUnread ? '🔵' : status === 'replied' ? '✅' : '📖';
      
      return {
        title: `${statusIcon} ${title || 'Unknown Sender'}`,
        subtitle: `${new Date(date).toLocaleDateString()} - ${subtitle}`,
      }
    },
  },
})
