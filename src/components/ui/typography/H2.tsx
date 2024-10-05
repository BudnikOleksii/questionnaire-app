import { type FC, type HTMLProps } from 'react';

export const H2: FC<HTMLProps<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h2 className={`font-bold text-2xl ${className ?? ''}`} {...props}>
      {children}
    </h2>
  );
};
