import { defineType } from 'sanity'
import { marginYFields, paddingFields } from 'schemas/styles/spacing-fields'

import headings from './headings'

export default defineType({
  title: 'Section Heading',
  name: 'sectionHeading',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title
          ? `${selection.title} - Section Heading`
          : 'Section Heading',
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
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [...headings],
      },
    },
    {
      title: 'Spacing',
      type: 'object',
      name: 'spacing',
      options: {
        columns: 2,
      },
      fields: [...marginYFields, ...paddingFields],
    },
  ],
})
