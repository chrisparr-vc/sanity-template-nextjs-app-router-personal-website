import { defineType } from 'sanity'

import { marginYFields } from '../styles/spacing-fields'

export default defineType({
  title: 'Table of Contents',
  name: 'tableOfContents',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title ? `${selection.title} - Contents` : 'Contents',
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
