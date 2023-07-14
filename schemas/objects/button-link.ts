import { defineType } from 'sanity'

export default defineType({
  title: 'Button Link',
  name: 'buttonLink',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Link', value: 'link' },
          { title: 'Button', value: 'button' },
        ],
      },
    },
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Between', value: 'between' },
          { title: 'Right', value: 'right' },
        ],
      },
    },
  ],
})
