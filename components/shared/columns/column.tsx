import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { BlockContent } from '../../block-content';
import { SPACING_MULTIPLIER } from '../../../../constants';

export type ColumnProps = {
  width: string;
  content: any;
  contentAlignment?: 'left' | 'center' | 'right';
  spaceX?: number;
};

export const Column: FC<PropsWithChildren<ColumnProps>> = ({ width, content, contentAlignment, spaceX }) => {
  const widthPercentage = (eval(width) ?? 1) * 100;

  console.log('spaceX', spaceX);

  const calculatedWidth = `calc(${widthPercentage}% - ${(spaceX ?? 0) * SPACING_MULTIPLIER}px)`;

  return (
    <div
      className={clsx(`column flex flex-col`)}
      style={{
        width: calculatedWidth,
        alignItems: contentAlignment === 'left' ? 'start' : contentAlignment === 'right' ? 'end' : 'center',
      }}
    >
      <BlockContent body={content} />
    </div>
  );
};
