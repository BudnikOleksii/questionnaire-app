import { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { Navigation } from '@/components/Navigation';
import { type LayoutVariant } from '@/types/theme';

interface Props {
  variant: LayoutVariant;
  isFirstPage?: boolean;
  children: ReactNode;
}

const LAYOUT_CLASSES: Record<LayoutVariant, HTMLAttributes<'div'>['className']> = {
  default: 'bg-primary',
  'with-gradient': 'bg-gradient-main text-white',
};

// TODO: actually titles can have different color

export const Layout: FC<Props> = ({ variant, isFirstPage, children }) => {
  const classes = LAYOUT_CLASSES[variant];

  return (
    <div className={`min-h-[100svh] ${classes}`}>
      <div className="container">
        <Navigation hasBackButton={isFirstPage} variant={variant} />

        <main>{children}</main>
      </div>
    </div>
  );
};
