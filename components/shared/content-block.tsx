import { PortableText } from '@portabletext/react'
import { FC } from 'react'
import { PortableTextBlock } from 'sanity'

import { AccordionBlock } from './accordion/accordion-block'
import { Alert } from './alert'
import { Columns } from './columns/columns'
import { ContentsBlock } from './contents/contents-block'
import { ImageBlock } from './image-block'
import { Section } from './section'
import { SectionHeading } from './section-heading'

export type ContentBlockProps = {
  data?: (PortableTextBlock & any)[]
}

const components = {
  types: {
    sectionHeading: SectionHeading,
    alert: Alert,
    contents: ContentsBlock,
    accordion: AccordionBlock,
    customImage: ImageBlock,
    columns: Columns,
    section: Section,
  },
  list: {
    bullet: ({ children }: { children?: any }) => (
      <ul className="p-2 m-4 list-disc list-outside">{children}</ul>
    ),
    number: ({ children }: { children?: any }) => (
      <ol className="p-2 m-4 list-decimal list-outside">{children}</ol>
    ),
  },
}

export const ContentBlock: FC<ContentBlockProps> = ({ data }) => {
  return <PortableText value={data} components={components} />
}
