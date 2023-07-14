import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type H4Props = {
  className?: string;
  bold?: boolean;
};

export const H4: FC<PropsWithChildren<H4Props>> = ({ className, children }) => {
  return <h4 className={clsx('h4  heading font-medium text-h2 font-sans', className)}>{children}</h4>;
};
