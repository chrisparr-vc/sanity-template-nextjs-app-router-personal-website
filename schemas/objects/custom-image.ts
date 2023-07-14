import { defineType } from 'sanity'

import { borderField } from '../styles/border-fields'
import { marginYFields, paddingXFields } from '../styles/spacing-fields'

export default defineType({
  title: 'Image',
  name: 'smartImage',
  type: 'object',
  preview: {
    select: {
      alt: 'alt',
    },
    prepare(selection) {
      return {
        title: selection.alt ? `${selection.alt} - Image` : 'Image',
      }
    },
  },
  fields: [
    {
      title: 'Image Upload',
      type: 'image',
      name: 'imageUpload',
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'contentBlock',
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    borderField,
    {
      title: 'Spacing',
      type: 'object',
      name: 'spacing',
      options: {
        columns: 2,
      },
      fields: [...marginYFields, ...paddingXFields],
    },
  ],
})
