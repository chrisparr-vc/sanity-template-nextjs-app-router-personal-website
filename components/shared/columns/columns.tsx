import { PortableTextTypeComponentProps } from '@portabletext/react'
import { clsx } from 'clsx'
import { maxWidthMap, SPACING_MULTIPLIER } from 'components/contents'
import { FC } from 'react'

import { Column } from './column'

export type ColumnsProps = {
  title: string
  columns: any[]
  spacing: {
    spaceX: number
    paddingLeft: number
    paddingRight: number
  }
  contentAlignment: 'left' | 'center' | 'right'
  maxWidth: string
}

export const Columns: FC<PortableTextTypeComponentProps<ColumnsProps>> = ({
  value,
}) => {
  const { columns, spacing, title, contentAlignment, maxWidth } = value

  const { paddingLeft, paddingRight, spaceX } = spacing ?? {}

  const spaceXClass = spaceX ? `space-x-${spaceX}` : 'space-x-0'

  return (
    <div
      className={clsx('columns flex flex-wrap w-full mx-auto', spaceXClass)}
      id={title}
      style={{
        justifyContent: contentAlignment,
        paddingLeft: `${(paddingLeft ?? 0) * SPACING_MULTIPLIER}px`,
        paddingRight: `${(paddingRight ?? 0) * SPACING_MULTIPLIER}px`,
        maxWidth: maxWidthMap.get(maxWidth ?? '100%') ?? '100%',
      }}
    >
      {columns.map((column: any, index: number) => {
        return <Column key={index} {...column} spaceX={spaceX} />
      })}
    </div>
  )
}
