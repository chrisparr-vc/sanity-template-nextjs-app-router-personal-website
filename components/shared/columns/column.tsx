import { clsx } from 'clsx'
import { SPACING_MULTIPLIER } from 'components/contents'
import { FC, PropsWithChildren } from 'react'

import { ContentBlock } from '../content-block'

export type ColumnProps = {
  width: {
    standardWidth: string
    smallWidth: string
    mediumWidth: string
    largeWidth: string
    xlWidth: string
    xxlWidth: string
  }
  content: any
  contentAlignment?: 'left' | 'center' | 'right'
  spaceX?: number
}

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  width,
  content,
  contentAlignment,
  spaceX,
}) => {
  // const widthPercentage = (eval(width) ?? 1) * 100

  const {
    standardWidth,
    smallWidth,
    mediumWidth,
    largeWidth,
    xlWidth,
    xxlWidth,
  } = width

  // const calculatedWidth = `calc(${widthPercentage}% - ${
  //   (spaceX ?? 0) * SPACING_MULTIPLIER
  // }px)`

  const widthClasses = `${standardWidth ? `w-${standardWidth}` : ''} ${
    `sm:w-${smallWidth}` ?? ''
  } ${`md:w-${mediumWidth}` ?? ''} ${`lg:w-${largeWidth}` ?? ''} ${
    `xl:w-${xlWidth}` ?? ''
  } ${`2xl:w-${xxlWidth}` ?? ''}`

  return (
    <div
      className={clsx(`column flex flex-col`, widthClasses)}
      style={{
        alignItems:
          contentAlignment === 'left'
            ? 'start'
            : contentAlignment === 'right'
            ? 'end'
            : 'center',
      }}
    >
      <ContentBlock data={content} />
    </div>
  )
}
