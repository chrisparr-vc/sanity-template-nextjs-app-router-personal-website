import { AccordionContent, AccordionItem, AccordionTrigger } from '@core/components/layout/accordion/accordion';
import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { BlockContent } from '../../block-content';
import { H3 } from '../../text/h3';
import { MinusIcon } from '@core/components/icons/minus';
import { PlusLargeIcon } from '@core/components/icons/plus-large';

export type AccordionBlockItemProps = {
  title: string;
  content: any;
};

export const AccordionBlockItem: FC<PropsWithChildren<AccordionBlockItemProps>> = ({ title, content }) => {
  return (
    <AccordionItem value={title} className="border-b group border-secondary-3-300">
      <AccordionTrigger>
        <div className="flex items-center justify-between w-full h-22">
          <H3 className="font-normal text-left group-data-state-open:text-primary-1-danube group-data-state-closed:text-black">
            {title}
          </H3>
          <div
            className={clsx(
              'rounded-full w-10 h-10 flex justify-center items-center group-data-state-open:bg-primary-1-danube group-data-state-closed:bg-background',
            )}
          >
            <MinusIcon className="group-data-state-open:block group-data-state-closed:hidden" />
            <PlusLargeIcon className="group-data-state-open:hidden group-data-state-closed:block" />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <BlockContent body={content} />
      </AccordionContent>
    </AccordionItem>
  );
};
