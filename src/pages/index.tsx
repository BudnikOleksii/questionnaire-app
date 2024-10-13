import type { InferGetStaticPropsType } from 'next';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import questionnaireService from '@/api/questionnaire';

export const getStaticProps = async () => {
  const questions = await questionnaireService.getAll();
  const firstQuestion = questions.find((question) => question.isFirstScreen);

  if (!firstQuestion) {
    throw new Error('First question not found');
  }

  return {
    props: {
      fallbackDestination: `/${firstQuestion.id}`,
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

  return null;
}
