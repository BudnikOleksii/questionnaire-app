import { type ButtonHTMLAttributes, type DetailedHTMLProps, type FC } from 'react';
import { type ButtonVariant } from '@/types/theme';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: ButtonVariant;
}

const VARIANTS_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-button-primary',
  active: 'bg-gradient-main text-light-primary',
};

export const Button: FC<Props> = ({ variant, className, children, ...rest }) => {
  const variantClasses = VARIANTS_CLASSES[variant];

  return (
    <button
      className={`w-full rounded-2xl px-5 py-3 border border-border shadow-primary ${variantClasses + (className ?? '')}`}
      {...rest}
    >
      {children}
    </button>
  );
};
