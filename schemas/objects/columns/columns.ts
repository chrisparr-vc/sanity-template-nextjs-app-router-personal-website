import { defineArrayMember, defineType } from 'sanity';
import { paddingXFields, spaceXField } from '../../spacing-fields';
import { contentAlignmentField } from '../../alignment';
import { maxWidthField } from '../../max-width';

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
      };
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
});
