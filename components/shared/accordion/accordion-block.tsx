import { PortableTextTypeComponentProps } from '@portabletext/react'
import { clsx } from 'clsx'
import { SPACING_MULTIPLIER } from 'components/contents'
import { Accordion } from 'components/core/accordion'
import { FC } from 'react'

import { AccordionBlockItem } from './accordion-block-item'

export type AccordionBlockProps = {
  type: 'multiple' | 'single'
  accordionItems: any[]
  marginTop: number
  marginBottom: number
}

export const AccordionBlock: FC<
  PortableTextTypeComponentProps<AccordionBlockProps>
> = ({ value }) => {
  const { type, accordionItems, marginBottom, marginTop } = value
  return (
    <Accordion
      className={clsx('accordion-block w-full')}
      type={type ?? 'single'}
      collapsible
      style={{
        marginTop: `${marginTop * SPACING_MULTIPLIER}px`,
        marginBottom: `${marginBottom * SPACING_MULTIPLIER}px`,
      }}
    >
      {accordionItems.map((item: any, index) => (
        <AccordionBlockItem key={index} {...item} />
      ))}
    </Accordion>
  )
}
