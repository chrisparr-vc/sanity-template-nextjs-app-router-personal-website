import { PortableTextTypeComponentProps } from '@portabletext/react';
import { clsx } from 'clsx';
import { FC } from 'react';
import { ContentsInner } from './contents-inner';
import { SPACING_MULTIPLIER } from '../../../../constants';

export type ContentsBlockProps = {
  title?: string;
  spacing: {
    marginTop: number;
    marginBottom: number;
  };
};

export const ContentsBlock: FC<PortableTextTypeComponentProps<ContentsBlockProps>> = ({ value }) => {
  const { title, spacing } = value;

  const { marginBottom, marginTop } = spacing ?? {};

  return (
    <div
      className={clsx('contents-block pb-8 border-b border-secondary-3-300 w-full')}
      style={{
        marginTop: `${marginTop * SPACING_MULTIPLIER}px`,
        marginBottom: `${marginBottom * SPACING_MULTIPLIER}px`,
      }}
    >
      <div className={clsx('border-primary-1-danube border-l-4 pl-11 pt-2')}>
        <ContentsInner title={title} />
      </div>
    </div>
  );
};
