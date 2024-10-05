import { useRouter } from 'next/router';
import { type FC } from 'react';
import { Button } from '@/components/ui/buttons/button';
import { ROUTES } from '@/constants/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAnswerByQuestionName } from '@/store/questionnaire/questionnaire-selectors';
import { addAnswer } from '@/store/questionnaire/questionnaire-slice';
import { type Option } from '@/types/questionnaire';

interface Props {
  questionName: string;
  options: Option[];
  isLastScreen?: boolean;
}

export const Options: FC<Props> = ({ questionName, isLastScreen, options }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector(selectAnswerByQuestionName(questionName));

  return (
    <div className="flex flex-col gap-5">
      {options.map((option) => {
        const { id, value, text, nextQuestionId } = option;
        const isActive = selectedAnswer === value;

        const handleClick = () => {
          if (isActive) {
            const nextUrl = isLastScreen ? ROUTES.answers : nextQuestionId.toString();
            router.push(nextUrl);
          }

          dispatch(addAnswer({ questionName, answer: value }));
        };

        return (
          <Button key={id} variant={isActive ? 'active' : 'primary'} onClick={handleClick}>
            {text}
          </Button>
        );
      })}
    </div>
  );
};
