import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type LayoutVariant } from '@/types/theme';

type ImageVariant = 'black' | 'white';

// TODO: use sprites instead
const IMAGES_VARIANTS_MAP: Record<LayoutVariant, ImageVariant> = {
  default: 'black',
  'with-gradient': 'white',
};

const EmptyBlock = <div className="w-6" />;

interface Props {
  variant: LayoutVariant;
  hasBackButton?: boolean;
}

export const Navigation: FC<Props> = ({ hasBackButton, variant }) => {
  const router = useRouter();
  const imagesVariant = IMAGES_VARIANTS_MAP[variant];

  const goBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <nav className="py-3 flex justify-between items-center">
      {hasBackButton ? (
        EmptyBlock
      ) : (
        <button type="button" onClick={goBack}>
          <Image
            priority
            src={`images/chevron-${imagesVariant}.svg`}
            height={24}
            width={24}
            alt="back button"
            color="currentColor"
          />
        </button>
      )}

      <Link href="/">
        <Image
          priority
          src={`images/nebula-logo-${imagesVariant}.svg`}
          height={24}
          width={24}
          alt="Nebula"
          color="currentColor"
        />
      </Link>

      {EmptyBlock}
    </nav>
  );
};
