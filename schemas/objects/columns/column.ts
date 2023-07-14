import { defineType } from 'sanity'
import { contentAlignmentField } from 'schemas/styles/alignment'
import widths from 'schemas/styles/widths'

export default defineType({
  title: 'Column',
  name: 'column',
  type: 'object',
  fields: [
    {
      title: 'Widths at different breakpoints',
      type: 'object',
      name: 'widthsAtBreakpoints',
      options: {
        columns: 2,
      },
      fields: [
        {
          title: 'Standard Width',
          name: 'standardWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
        {
          title: 'Small Width (384px)',
          name: 'smallWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
        {
          title: 'Medium (448px)',
          name: 'mediumWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
        {
          title: 'Large (512px)',
          name: 'largeWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
        {
          title: 'Extra large (576px)',
          name: 'xlWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
        {
          title: '2xl (672px)',
          name: 'xxlWidth',
          type: 'string',
          initialValue: 'w-full',
          options: {
            list: widths,
          },
        },
      ],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'contentBlock',
    },
    { ...contentAlignmentField, initialValue: 'left' },
  ],
})
