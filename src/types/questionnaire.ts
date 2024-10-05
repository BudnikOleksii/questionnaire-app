export type QuestionId = number;
export type Answer = string | boolean | number;
export type ScreenType = 'radio' | 'info'; // TODO: add other types

export interface Option {
  id: number;
  slug: string;
  value: string;
  text: string;
  nextQuestionId: QuestionId;
}

export interface Question {
  id: QuestionId;
  slug: string;
  name: string;
  text: string;
  screenType: ScreenType;
  options: Option[];
  isFirstScreen?: boolean;
  isLastScreen?: boolean;
}

export interface QuestionsResponse {
  questions: Question[];
}
