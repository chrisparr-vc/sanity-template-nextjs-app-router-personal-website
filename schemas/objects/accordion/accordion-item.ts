import { defineType } from 'sanity'

export default defineType({
  title: 'Accordion Item',
  name: 'accordionItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'contentBlock',
    },
  ],
})
