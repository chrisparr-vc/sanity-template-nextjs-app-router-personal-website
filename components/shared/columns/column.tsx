import { clsx } from 'clsx'
import {
  SPACING_MULTIPLIER,
  tailwind2xlPercentageWidthMap,
  tailwindLgPercentageWidthMap,
  tailwindMdPercentageWidthMap,
  tailwindPercentageWidthMap,
  tailwindSmPercentageWidthMap,
  tailwindXlPercentageWidthMap,
} from 'components/contents'
import { FC, PropsWithChildren } from 'react'

import { ContentBlock } from '../content-block'

export type ColumnProps = {
  widthsAtBreakpoints: {
    standardWidth: string
    smallWidth: string
    mediumWidth: string
    largeWidth: string
    xlWidth: string
    xxlWidth: string
  }
  content: any
  contentAlignment?: 'left' | 'center' | 'right'
}

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  widthsAtBreakpoints,
  content,
  contentAlignment,
}) => {
  // const widthPercentage = (eval(width) ?? 1) * 100

  const {
    standardWidth,
    smallWidth,
    mediumWidth,
    largeWidth,
    xlWidth,
    xxlWidth,
  } = widthsAtBreakpoints

  // const calculatedWidth = `calc(${widthPercentage}% - ${
  //   (spaceX ?? 0) * SPACING_MULTIPLIER
  // }px)`

  const standardWidthClass = standardWidth
    ? tailwindPercentageWidthMap.get(standardWidth)
    : ''
  const smallWidthClass = smallWidth
    ? tailwindSmPercentageWidthMap.get(smallWidth)
    : ''
  const mediumWidthClass = mediumWidth
    ? tailwindMdPercentageWidthMap.get(mediumWidth)
    : ''
  const largeWidthClass = largeWidth
    ? tailwindLgPercentageWidthMap.get(largeWidth)
    : ''
  const xlWidthClass = xlWidth ? tailwindXlPercentageWidthMap.get(xlWidth) : ''
  const xxlWidthClass = xxlWidth
    ? tailwind2xlPercentageWidthMap.get(xxlWidth)
    : ''

  return (
    <div
      className={clsx(
        `column flex flex-col`,
        standardWidthClass,
        smallWidthClass,
        mediumWidthClass,
        largeWidthClass,
        xlWidthClass,
        xxlWidthClass
      )}
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
