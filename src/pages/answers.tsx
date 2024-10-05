import { type NextPage } from 'next';
import { useAppSelector } from '@/store/hooks';
import { selectAnswers } from '@/store/questionnaire/questionnaire-selectors';

const Answers: NextPage = () => {
  const answers = useAppSelector(selectAnswers);

  return (
    <div>
      {Object.entries(answers).map(([id, answer]) => (
        <div key={id}>{answer}</div>
      ))}
    </div>
  );
};

export default Answers;
