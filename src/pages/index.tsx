import type { InferGetStaticPropsType } from 'next';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import questionnaireService from '@/api/questionnaire';

export const getStaticProps = async () => {
  const questions = await questionnaireService.getAll();
  return {
    props: {
      fallbackDestination: `/${questions[0].id}`,
    },
  };
};

export default function Home({
  fallbackDestination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  useEffect(() => {
    if (fallbackDestination) {
      router.replace(fallbackDestination);
    }
  }, [fallbackDestination, router]);

  return <p>Redirecting...</p>;
}
