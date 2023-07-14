import clsx from 'clsx'
import { ContentBlock } from 'components/shared/content-block'
import { H1 } from 'components/shared/text/h1'
import { FC } from 'react'
import { PagePayload } from 'types'

export type PageProps = {
  data: PagePayload
}

export const Page: FC<PageProps> = ({ data }) => {
  const { body, name, overview, title, slug } = data

  return (
    <div className="flex flex-col items-center page resource">
      <ContentBlock data={body} />
    </div>
  )
}
