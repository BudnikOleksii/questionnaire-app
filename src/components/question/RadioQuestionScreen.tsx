import type { Question } from '@/types/questionnaire';

import { type FC } from 'react';
import { Options } from '@/components/question/Options';
import { H2 } from '@/components/ui/typography/H2';
import { useAppSelector } from '@/store/hooks';
import { selectAnswers } from '@/store/questionnaire/questionnaire-selectors';
import { replaceDynamicValues } from '@/utils/replace-dynamic-values';

interface Props {
  question: Question;
}

export const RadioQuestionScreen: FC<Props> = ({ question }) => {
  const answers = useAppSelector(selectAnswers);
  const title = replaceDynamicValues(question.text, answers);

  return (
    <div className="max-w-[330px] mx-auto flex flex-col gap-4">
      <H2 className="text-dark-primary">{title}</H2>
      <Options options={question.options} questionName={question.name} />
    </div>
  );
};
