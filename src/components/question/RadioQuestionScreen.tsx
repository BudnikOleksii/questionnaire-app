import type { Question } from '@/types/questionnaire';

import { type FC } from 'react';
import { Options } from '@/components/question/Options';
import { H2 } from '@/components/ui/typography/H2';

interface Props {
  question: Question;
}

export const RadioQuestionScreen: FC<Props> = ({ question }) => {
  return (
    <div className="max-w-[330px] mx-auto flex flex-col gap-4">
      <H2 className="text-dark-primary">{question.text}</H2>
      <Options options={question.options} questionName={question.name} />
    </div>
  );
};
