import { type AppState } from '@/store/store';

export const selectAnswers = (state: AppState) => {
  return state.questionnaire.answers;
};

export const selectAnswerByQuestionName = (questionName: string) => {
  return (state: AppState) => {
    return state.questionnaire.answers[questionName];
  };
};
