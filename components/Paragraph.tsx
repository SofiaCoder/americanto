import clsx from 'clsx';
import React from 'react';

type ParagraphProps = {
  as?: 'p';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  children: React.ReactNode;
  className?: string;
};

const Paragraph = ({
  as: Comp = 'p',
  className,
  children,
  size = 'sm',
}: ParagraphProps) => {
  return (
    <Comp
      className={clsx(
        size === 'xl' && 'text-lg sm:text-xl md:text-2xl',
        size === 'lg' && 'text-md sm:text-lg md:text-xl',
        size === 'md' && 'text-sm sm:text-md md:text-lg',
        size === 'sm' && 'text-xs sm:text-sm md:text-md',
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Paragraph;
