import { PortableTextTypeComponentProps } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import { clsx } from 'clsx'
import { SPACING_MULTIPLIER } from 'components/contents'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import { FC } from 'react'

import { ContentBlock } from './content-block'

export type ImageBlockProps = {
  caption?: any
  alt?: string
  spacing: {
    marginTop?: number
    marginBottom?: number
    paddingRight?: number
    paddingLeft?: number
  }
  border?: number
  imageUpload?: any
}

export const ImageBlock: FC<
  PortableTextTypeComponentProps<ImageBlockProps>
> = ({ value, isInline }) => {
  const sanityClient = getClient()

  const { alt, caption, imageUpload, spacing, border } = value

  const { marginTop, marginBottom, paddingLeft, paddingRight } = spacing ?? {}

  const { width, height } = imageUpload
    ? getImageDimensions(imageUpload)
    : { width: 0, height: 0 }

  return (
    <div
      className={clsx('w-fit rounded-lg border-gray-300 border')}
      style={{
        paddingLeft: `${(paddingLeft ?? 0) * SPACING_MULTIPLIER}px`,
        paddingRight: `${(paddingRight ?? 0) * SPACING_MULTIPLIER}px`,
        marginTop: `${(marginTop ?? 0) * SPACING_MULTIPLIER}px`,
        marginBottom: `${(marginBottom ?? 0) * SPACING_MULTIPLIER}px`,
        borderWidth: `${border ?? 0}px`,
      }}
    >
      {imageUpload?.asset?._ref && urlBuilder && (
        <Image
          className="rounded-lg"
          width={width}
          height={height}
          src={urlBuilder(sanityClient)
            .image(imageUpload?.asset?._ref)
            .fit('max')
            .auto('format')
            .url()}
          alt={alt || ' '}
          loading="lazy"
          style={{
            display: isInline ? 'inline-block' : 'block',
            aspectRatio: width / height,
          }}
        />
      )}
      {caption && (
        <div className="px-1 mt-2">
          <ContentBlock data={caption} />
        </div>
      )}
    </div>
  )
}
