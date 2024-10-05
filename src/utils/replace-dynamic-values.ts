import { type QuestionnaireState } from '@/store/questionnaire/questionnaire-slice';

export const replaceDynamicValues = (text: string, answers: QuestionnaireState['answers']) => {
  return text
    .replace(/\{(\w+)\}/g, (_, key) => {
      return answers[key] ? answers[key].toString() : '';
    })
    .replace(/\(\((.*?)\)\)/g, (_, expression) => {
      const [key, value] = expression.split('??');
      return answers[key] ? value : '';
    });
};
