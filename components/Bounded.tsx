import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export const Bounded = ({
  as: Comp = 'section',
  className,
  id,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <Comp id={id} className={clsx('', className)} {...restProps}>
      {children}
    </Comp>
  );
};

export default Bounded;
