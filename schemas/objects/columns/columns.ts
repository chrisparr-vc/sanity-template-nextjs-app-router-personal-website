import { defineArrayMember, defineType } from 'sanity'
import { contentAlignmentField } from 'schemas/styles/alignment'
import { maxWidthField } from 'schemas/styles/max-width'
import { paddingXFields, spaceXField } from 'schemas/styles/spacing-fields'

export default defineType({
  title: 'Columns',
  name: 'columns',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title ? `${selection.title} - Columns` : 'Columns',
      }
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    maxWidthField,
    {
      title: 'Columns',
      name: 'columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'column',
        }),
      ],
    },
    {
      ...contentAlignmentField,
      title: 'Column alignment',
    },
    {
      title: 'Spacing',
      type: 'object',
      name: 'spacing',
      options: {
        columns: 2,
      },
      fields: [...paddingXFields, spaceXField],
    },
  ],
})
