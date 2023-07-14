import { defineType } from 'sanity'
import { contentAlignmentField } from 'schemas/styles/alignment'

export default defineType({
  title: 'Column',
  name: 'column',
  type: 'object',
  fields: [
    {
      title: 'Width',
      name: 'width',
      type: 'string',
      initialValue: 'w-full',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '1/2', value: '1/2' },
          { title: '1/3', value: '1/3' },
          { title: '2/3', value: '2/3' },
          { title: '1/4', value: '1/4' },
          { title: '3/4', value: '3/4' },
          { title: '1/5', value: '1/5' },
          { title: '2/5', value: '2/5' },
          { title: '3/5', value: '3/5' },
          { title: '4/5', value: '4/5' },
        ],
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
    { ...contentAlignmentField, initialValue: 'left' },
  ],
})
