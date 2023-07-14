import { defineArrayMember, defineType } from 'sanity'

import { marginYFields } from '../../styles/spacing-fields'
import { accordionType } from './accordion-types'

export default defineType({
  title: 'Accordion',
  name: 'accordion',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [...accordionType],
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
    {
      title: 'Accordion Items',
      name: 'accordionItems',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'accordionItem',
        }),
      ],
    },
  ],
})
