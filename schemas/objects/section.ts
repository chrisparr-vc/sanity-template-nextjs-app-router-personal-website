import { defineType } from 'sanity'
import { contentAlignmentField } from 'schemas/styles/alignment'
import { maxWidthField } from 'schemas/styles/max-width'
import { marginYFields, paddingFields } from 'schemas/styles/spacing-fields'

export default defineType({
  title: 'Section',
  name: 'section',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title ? `${selection.title} - Section` : 'Section',
      }
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    { ...contentAlignmentField, initialValue: 'left' },
    maxWidthField,
    {
      title: 'Spacing',
      type: 'object',
      name: 'spacing',
      options: {
        columns: 2,
      },
      fields: [...marginYFields, ...paddingFields],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
  ],
})
