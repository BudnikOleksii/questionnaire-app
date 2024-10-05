import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import questionnaireService from '@/api/questionnaire';
import { type Question } from '@/types/questionnaire';

export const getStaticPaths = (async () => {
  const questions = await questionnaireService.getAll();
  const paths = questions.map((question) => ({
    params: { screenId: question.id.toString() },
  }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  if (!params || !params.screenId) {
    throw new Error('No parameters provided');
  }

  const question = await questionnaireService.getOneById(+params.screenId);
  return { props: { question } };
}) satisfies GetStaticProps<{
  question: Question;
}>;

export default function Screen({ question }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{question.slug}</div>;
}
