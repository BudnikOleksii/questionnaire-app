import type { QuestionnaireState } from '@/store/questionnaire/questionnaire-slice';

import { type ConditionalString } from '@/types/questionnaire';

export const getConditionalValue = (
  conditionalString: ConditionalString,
  answers: QuestionnaireState['answers']
) => {
  const [key, conditions] = conditionalString.split('?');
  const [trueValue, falsyValue] = conditions.split(':');

  return answers[key] ? trueValue : falsyValue;
};
