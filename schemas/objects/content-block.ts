import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Content Block',
  name: 'contentBlock',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],

        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      } as any,
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'smartImage',
    }),
    defineArrayMember({
      type: 'accordion',
    }),
    // defineArrayMember({
    //   type: 'video',
    // }),

    defineArrayMember({
      type: 'columns',
    }),
    // defineArrayMember({
    //   type: 'carousel',
    // }),
    defineArrayMember({
      type: 'tableOfContents',
    }),
    // defineArrayMember({
    //   type: 'dataTable',
    // }),
    // defineArrayMember({
    //   type: 'features',
    // }),
    // defineArrayMember({
    //   type: 'highlight',
    // }),
    defineArrayMember({
      type: 'alert',
    }),
    defineArrayMember({
      type: 'links',
    }),
    defineArrayMember({
      type: 'quote',
    }),

    defineArrayMember({
      type: 'section',
    }),
    defineArrayMember({
      type: 'sectionHeading',
    }),
  ],
})
