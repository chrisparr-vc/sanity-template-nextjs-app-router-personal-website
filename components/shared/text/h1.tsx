import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type H1Props = {
  className?: string;
  bold?: boolean;
};

export const H1: FC<PropsWithChildren<H1Props>> = ({ className, children }) => {
  return <h1 className={clsx('h1 heading font-medium text-h1 font-sans', className)}>{children}</h1>;
};
