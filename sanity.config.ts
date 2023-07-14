/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import page from 'schemas/documents/page'
import accordion from 'schemas/objects/accordion/accordion'
import accordionItem from 'schemas/objects/accordion/accordion-item'
import alert from 'schemas/objects/alert'
import buttonLink from 'schemas/objects/button-link'
import column from 'schemas/objects/columns/column'
import columns from 'schemas/objects/columns/columns'
import contentBlock from 'schemas/objects/content-block'
import customImage from 'schemas/objects/custom-image'
import link from 'schemas/objects/links/link'
import links from 'schemas/objects/links/links'
import quote from 'schemas/objects/quote'
import section from 'schemas/objects/section'
import sectionHeading from 'schemas/objects/section-heading'
import tableOfContents from 'schemas/objects/table-of-contents'
import home from 'schemas/singletons/home'
import settings from 'schemas/singletons/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Next.js Personal Website with Sanity.io'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [home.name, page.name]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      page,
      // Objects
      accordion,
      accordionItem,
      alert,
      buttonLink,
      column,
      columns,
      contentBlock,
      customImage,
      link,
      links,
      quote,
      section,
      sectionHeading,
      tableOfContents,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
