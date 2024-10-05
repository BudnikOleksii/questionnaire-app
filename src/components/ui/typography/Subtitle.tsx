import type { FC, HTMLProps } from 'react';

export const Subtitle: FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={`text-lg font-bold ${className ?? ''}`} {...props}>
      {children}
    </p>
  );
};
