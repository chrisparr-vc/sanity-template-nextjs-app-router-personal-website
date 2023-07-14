'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import clsx from 'clsx';
import { stringToKebabCase } from '@core/helpers/string-format-helpers';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@core/components/layout/accordion/accordion';
import { ChevronIcon } from '@core/components/icons/chevron';

export type ContentsInnerProps = {
  title?: string;
};

export const ContentsInner: FC<PropsWithChildren<ContentsInnerProps>> = ({ title }) => {
  const [headings, setHeadings] = useState<{ value?: string | null; id: string | null }[]>([]);

  useEffect(() => {
    const sectionHeadings = document.getElementsByClassName('section-heading');
    const data = Array.from(sectionHeadings).map((element) => ({
      id: element.id,
      value: element.querySelector('.heading')?.textContent,
    }));
    setHeadings(data);
  }, []);

  const accordionVal = stringToKebabCase(title ?? 'accordion');

  return (
    <Accordion type="single" collapsible defaultValue={accordionVal}>
      <AccordionItem value={accordionVal} className="group">
        <AccordionTrigger>
          <div className="flex justify-between w-full py-2 pr-[2px]">
            <span className="font-black uppercase text-primary-1-danube text-body-xs">{title}</span>
            <div className="flex items-center justify-center">
              <ChevronIcon
                className={clsx(
                  'stroke-primary-1-danube  group-data-state-closed:rotate-90 group-data-state-open:-rotate-90 transition-all',
                )}
                width={10}
              />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="underline text-link-secondary text-medium-bold hover:text-link-secondary/50 underline-offset-4"
              >
                {heading.value?.replace(':', '')}
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
