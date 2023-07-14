import { PortableTextTypeComponentProps } from '@portabletext/react'
import { clsx } from 'clsx'
import { SPACING_MULTIPLIER } from 'components/contents'
import { FC } from 'react'

import { ContentBlock } from './content-block'
import { Normal } from './text/normal'

export type AlertProps = {
  title?: string
  content?: any
  type?: 'info' | 'warning' | 'critical'
  spacing: {
    marginTop?: number
    marginBottom?: number
  }
}

export const Alert: FC<PortableTextTypeComponentProps<AlertProps>> = ({
  value,
}) => {
  const { title, content, type, spacing } = value

  const { marginTop, marginBottom } = spacing ?? {}

  return (
    <div
      className={clsx('info-block border-l-4 px-11 py-6', {
        'border-primary-1-danube bg-primary-1-50': type === 'info',
        'border-primary-3-tree-poppy bg-primary-3-100/25': type === 'warning',
        'border-secondary-2-cinnabar bg-secondary-2-100/25':
          type === 'critical',
      })}
      style={{
        marginTop: `${(marginTop ?? 0) * SPACING_MULTIPLIER}px`,
        marginBottom: `${(marginBottom ?? 0) * SPACING_MULTIPLIER}px`,
      }}
    >
      {type !== 'info' && (
        <div className="flex items-center mb-2 space-x-2">
          {/* <InfoOutlineIcon
            width={24}
            className={clsx({
              // 'fill-primary-1-danube': type === 'info',
              'fill-primary-3-tree-poppy': type === 'warning',
              'fill-secondary-2-cinnabar': type === 'critical',
            })}
          /> */}
          <span className="font-black">Important Note</span>
        </div>
      )}
      {title && (
        <Normal className="mb-4 font-bold text-sub-heading-2-mobile">
          {title}
        </Normal>
      )}
      {content && <ContentBlock data={content} />}
    </div>
  )
}
