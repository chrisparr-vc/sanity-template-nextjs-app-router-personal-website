import { defineType } from 'sanity';

export default defineType({
  title: 'Link',
  name: 'link',
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
          { title: 'Download', value: 'download' },
          { title: 'Video', value: 'video', }
        ],
      },
    },
    {
      title: 'File',
      name: 'file',
      type: 'file',
      validation: Rule => Rule.custom((file, context) => {
        if (context.document?.type === 'download' && !file) {
          return 'File is required';
        } else if (context.document?.type !== 'download' && file) {
          return 'Only use file for download type';
        }

        return true;
      }),
    },
  ],
});