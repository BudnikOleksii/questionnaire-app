import { type AppState } from '@/store/store';

export const selectAnswers = (state: AppState) => {
  return state.questionnaire.answers;
};

export const selectAnswer = (state: AppState) => {};
