import 'styles/index.css'

import type { PortableTextBlock } from '@portabletext/types'
import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/preview-banner'
import PreviewProvider from 'components/preview/preview-provider'
import IntroTemplate from 'intro-template'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { SettingsPayload } from 'types'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const settings =
    (await client.fetch<SettingsPayload | null>(settingsQuery)) ??
    fallbackSettings

  const layout = (
    <div className="flex flex-col min-h-screen text-black bg-white">
      {preview && <PreviewBanner />}
      <Navbar menuItems={settings.menuItems} />
      <div className="flex-grow px-4 mt-20 md:px-16 lg:px-32">{children}</div>
      <Footer footer={settings.footer as PortableTextBlock[]} />
      <IntroTemplate />
    </div>
  )

  if (preview) {
    return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>
  }

  return layout
}
