import { type FC } from 'react';
import { ButtonLink } from '@/components/ui/buttons/button-link';
import { H2 } from '@/components/ui/typography/H2';
import { Paragraph } from '@/components/ui/typography/Paragraph';
import { useAppSelector } from '@/store/hooks';
import { selectAnswers } from '@/store/questionnaire/questionnaire-selectors';
import { type Question } from '@/types/questionnaire';
import { getConditionalValue } from '@/utils/get-conditional-value';
import { replaceDynamicValues } from '@/utils/replace-dynamic-values';

interface Props {
  question: Question;
}

export const InfoScreen: FC<Props> = ({ question }) => {
  const { text, description, options } = question;
  const answers = useAppSelector(selectAnswers);
  const title = replaceDynamicValues(text, answers);

  return (
    <div className="max-w-[330px] mx-auto flex flex-col text-center">
      <H2 className="mb-5 text-light-primary">{title}</H2>
      <Paragraph className="mb-10">{description}</Paragraph>

      {options.map((option) => {
        const { id, text, nextQuestionId } = option;
        const nextId =
          typeof nextQuestionId === 'number'
            ? nextQuestionId.toString()
            : getConditionalValue(nextQuestionId, answers);

        return (
          <ButtonLink key={id} href={nextId}>
            {text}
          </ButtonLink>
        );
      })}
    </div>
  );
};
