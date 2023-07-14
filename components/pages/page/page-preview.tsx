'use client'

import { pagesBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { FC } from 'react'
import type { PagePayload } from 'types'

import { Page, PageProps } from './page'

export const PagePreview: FC<PageProps> = ({ data: initialData }) => {
  const [data] = useLiveQuery<PagePayload | null>(
    initialData,
    pagesBySlugQuery,
    {
      slug: initialData?.slug,
    }
  )

  return <Page data={data ?? initialData} />
}
