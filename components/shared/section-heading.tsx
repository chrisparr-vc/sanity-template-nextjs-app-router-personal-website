import { PortableTextTypeComponentProps } from '@portabletext/react'
import { clsx } from 'clsx'
import { SPACING_MULTIPLIER } from 'components/contents'
import { FC } from 'react'
import { stringToKebabCase } from 'utils/string-format-helpers'

import ScrollToTopButton from './scroll-to-top-button'
import { H1 } from './text/h1'
import { H2 } from './text/h2'

export type SectionHeadingProps = {
  title: string
  size: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'quote'
  spacing: {
    marginTop: number
    marginBottom: number
    paddingTop: number
    paddingBottom: number
    paddingLeft: number
    paddingRight: number
  }
}

const headingMap = new Map(
  Object.entries({
    h1: H1,
    h2: H2,
  })
)

export const SectionHeading: FC<
  PortableTextTypeComponentProps<SectionHeadingProps>
> = ({ value }) => {
  const { title, size, spacing } = value

  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = spacing ?? {}

  const Heading = headingMap.get(size) || H1

  return (
    <div
      id={stringToKebabCase(title)}
      className={clsx(
        'section-heading flex justify-between w-full scroll-mt-40 '
      )}
      style={{
        marginTop: `${(marginTop ?? 0) * SPACING_MULTIPLIER}px`,
        marginBottom: `${(marginBottom ?? 0) * SPACING_MULTIPLIER}px`,
        paddingTop: `${(paddingTop ?? 0) * SPACING_MULTIPLIER}px`,
        paddingBottom: `${(paddingBottom ?? 0) * SPACING_MULTIPLIER}px`,
        paddingLeft: `${(paddingLeft ?? 0) * SPACING_MULTIPLIER}px`,
        paddingRight: `${(paddingRight ?? 0) * SPACING_MULTIPLIER}px`,
      }}
    >
      <Heading>{title}</Heading>
      <ScrollToTopButton />
    </div>
  )
}
