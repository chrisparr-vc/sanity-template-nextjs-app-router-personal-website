import { PortableTextTypeComponentProps } from '@portabletext/react'
import { clsx } from 'clsx'
import { maxWidthMap, SPACING_MULTIPLIER } from 'components/contents'
import { FC } from 'react'

import { ContentBlock } from './content-block'

export type SectionProps = {
  title: string
  content: any
  spacing: {
    paddingTop: number
    paddingBottom: number
    paddingLeft: number
    paddingRight: number
    marginTop: number
    marginBottom: number
  }
  contentAlignment: 'left' | 'center' | 'right'
  maxWidth: string
}

export const Section: FC<PortableTextTypeComponentProps<SectionProps>> = ({
  value,
}) => {
  const { content, spacing, title, contentAlignment, maxWidth } = value

  const {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
  } = spacing ?? {}

  return (
    <div
      className={clsx('section w-full flex flex-col mx-auto')}
      id={title}
      style={{
        alignItems: contentAlignment,
        paddingTop: `${(paddingTop ?? 0) * SPACING_MULTIPLIER}px`,
        paddingBottom: `${paddingBottom ?? 0 * SPACING_MULTIPLIER}px`,
        paddingLeft: `${(paddingLeft ?? 0) * SPACING_MULTIPLIER}px`,
        paddingRight: `${(paddingRight ?? 0) * SPACING_MULTIPLIER}px`,
        marginTop: `${(marginTop ?? 0) * SPACING_MULTIPLIER}px`,
        marginBottom: `${(marginBottom ?? 0) * SPACING_MULTIPLIER}px`,
        maxWidth: maxWidthMap.get(maxWidth ?? '100%') ?? '100%',
      }}
    >
      <ContentBlock data={content} />
    </div>
  )
}
