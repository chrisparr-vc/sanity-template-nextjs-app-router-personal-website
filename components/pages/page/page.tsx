import { FC } from 'react'
import { PagePayload } from 'types'

export type PageProps = {
  data: PagePayload | null
}

export const Page: FC<PageProps> = ({ data }) => {
  return <div className="page"></div>
}
