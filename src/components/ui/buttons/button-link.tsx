import Link, { type LinkProps } from 'next/link';
import { type FC, type ReactNode } from 'react';

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ children, ...props }) => {
  return (
    <Link
      className="w-full rounded-2xl px-5 py-3 bg-light-primary text-secondary shadow-secondary"
      {...props}
    >
      {children}
    </Link>
  );
};
