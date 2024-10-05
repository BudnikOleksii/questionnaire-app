import type { FC, HTMLProps } from 'react';

export const Paragraph: FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={`text-sm ${className ?? ''}`} {...props}>
      {children}
    </p>
  );
};
