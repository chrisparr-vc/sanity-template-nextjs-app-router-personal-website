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
      <div className="flex min-h-[22rem] w-full justify-center items-center flex-col bg-cover bg-top pt-8 md:pt-12 pb-12 md:pb-16">
        <div className="max-w-2xl text-center">
          {title && <H1 className={clsx({})}>{title}</H1>}
        </div>
      </div>
      <div className="flex flex-col w-full px-4 py-10 md:px-0">
        <ContentBlock data={body} />
      </div>
    </div>
  )
}
