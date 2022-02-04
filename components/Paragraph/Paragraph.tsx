import { Children } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  children: Children;
  className?: string;
  size?: 'small' | 'normal';
}

const Paragraph: FC<Props> = ({ className, children, size = 'normal' }) => {
  return (
    <p
      className={clsx(
        'leading-relaxed text-gray-dark lg:text-md',
        {
          'text-xs': size === 'small',
          'text-sm': size === 'normal',
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export { Paragraph };
