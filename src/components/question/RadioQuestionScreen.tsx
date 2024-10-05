import type { Question } from '@/types/questionnaire';

import { type FC } from 'react';
import { Options } from '@/components/question/Options';
import { H2 } from '@/components/ui/typography/H2';
import { Subtitle } from '@/components/ui/typography/Subtitle';
import { useAppSelector } from '@/store/hooks';
import { selectAnswers } from '@/store/questionnaire/questionnaire-selectors';
import { replaceDynamicValues } from '@/utils/replace-dynamic-values';

interface Props {
  question: Question;
}

export const RadioQuestionScreen: FC<Props> = ({ question }) => {
  const { text, name, options, description, isLastScreen } = question;
  const answers = useAppSelector(selectAnswers);
  const title = replaceDynamicValues(text, answers);

  return (
    <div className="max-w-[330px] mx-auto flex flex-col mt-5">
      <H2 className="text-dark-primary mb-8">{title}</H2>
      {description && <Subtitle className="text-dark-primary mb-7">{description}</Subtitle>}

      <Options options={options} questionName={name} isLastScreen={isLastScreen} />
    </div>
  );
};
