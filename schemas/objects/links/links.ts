import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  title: 'Links',
  name: 'links',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'link',
        }),
      ],
    }
  ],
});