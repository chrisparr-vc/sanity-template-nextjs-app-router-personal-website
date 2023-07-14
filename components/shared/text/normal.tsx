import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type NormalProps = {
  className?: string;
  bold?: boolean;
};

export const Normal: FC<PropsWithChildren<NormalProps>> = ({ className, bold, children }) => {
  return (
    <span
      className={clsx('p font-sans', className, {
        'text-size-default': !bold,
        'text-default-bold': bold,
      })}
    >
      {children}
    </span>
  );
};
