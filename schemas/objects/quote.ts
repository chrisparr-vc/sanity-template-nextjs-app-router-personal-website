import { defineType } from 'sanity';
import { marginYFields } from '../spacing-fields';

export default defineType({
  title: 'Quote',
  name: 'quote',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title ? `${selection.title} - Quote` : 'Quote',
      };
    },
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
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
  ],
});
