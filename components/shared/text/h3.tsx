import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type H3Props = {
  className?: string;
  bold?: boolean;
};

export const H3: FC<PropsWithChildren<H3Props>> = ({ className, children }) => {
  return <h3 className={clsx('h2 heading font-medium text-h3 font-sans', className)}>{children}</h3>;
};
