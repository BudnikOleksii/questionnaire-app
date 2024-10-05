import type { Question } from '@/types/questionnaire';

import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import questionnaireService from '@/api/questionnaire';
import { Layout } from '@/components/Layout';
import { useAppSelector } from '@/store/hooks';
import { selectAnswers } from '@/store/questionnaire/questionnaire-selectors';
import { booleanToYesNo } from '@/utils/boolean-to-yes-no';
import { replaceDynamicValues } from '@/utils/replace-dynamic-values';

export const getStaticProps = (async () => {
  const questions = await questionnaireService.getAll();

  return { props: { questions } };
}) satisfies GetStaticProps<{
  questions: Question[];
}>;

export default function Answers({ questions }: InferGetStaticPropsType<typeof getStaticProps>) {
  const answers = useAppSelector(selectAnswers);
  const questionsMap = questions.reduce((acc, question) => {
    acc.set(question.name, question);
    return acc;
  }, new Map<string, Question>());

  return (
    <Layout variant="default">
      <ul className="max-w-[600px] mx-auto mt-5">
        {Object.entries(answers).map(([name, answer]) => {
          const question = questionsMap.get(name);

          if (!question) {
            return null;
          }

          const questionText = replaceDynamicValues(question.text, answers);
          const preparedAnswer = typeof answer === 'boolean' ? booleanToYesNo(answer) : answer;

          return (
            <li key={name} className="mb-2">
              {questionText} {preparedAnswer}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
