import { defineArrayMember, defineType } from 'sanity'

import { marginYFields } from '../styles/spacing-fields'

export default defineType({
  title: 'Alert',
  name: 'alert',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title
          ? `${selection.title} - Info Block`
          : 'Info Block',
      }
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
        }),
      ],
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Critical', value: 'critical' },
        ],
      },
    },
    {
      title: 'Spacing',
      type: 'object',
      name: 'spacing',
      options: {
        columns: 2,
      },
      fields: marginYFields,
    },
  ],
})
