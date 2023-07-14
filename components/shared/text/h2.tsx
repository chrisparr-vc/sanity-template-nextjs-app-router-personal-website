import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type H2Props = {
  className?: string;
  bold?: boolean;
};

export const H2: FC<PropsWithChildren<H2Props>> = ({ className, children }) => {
  return <h2 className={clsx('h2 heading font-medium text-h2 font-sans', className)}>{children}</h2>;
};
