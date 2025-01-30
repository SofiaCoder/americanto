import clsx from 'clsx';
import React from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  children: React.ReactNode;
  className?: string;
};

const Heading = ({
  as: Comp = 'h1',
  className,
  children,
  size = 'lg',
}: HeadingProps) => {
  return (
    <Comp
      className={clsx(
        'font-bold',
        size === 'xl' && 'text-4xl sm:text-5xl md:text-7xl',
        size === 'lg' && 'text-3xl sm:text-4xl md:text-5xl',
        size === 'md' && 'text-2xl sm:text-3xl md:text-4xl',
        size === 'sm' && 'text-xl sm:text-2xl md:text-3xl',
        size === 'xs' && 'text-lg sm:text-xl md:text-2xl',
        size === 'xxs' && 'text-base sm:text-lg md:text-xl',
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Heading;
