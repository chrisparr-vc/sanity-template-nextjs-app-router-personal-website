import type { PortableTextBlock } from '@portabletext/types'
import { ContentBlock } from 'components/shared/content-block'

export function Footer({ footer }: { footer?: PortableTextBlock[] }) {
  return (
    <footer className="bottom-0 w-full py-12 text-center bg-white md:py-20">
      {footer && <ContentBlock data={footer} />}
    </footer>
  )
}
