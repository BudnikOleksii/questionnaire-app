export type QuestionId = number;
export type Answer = string | boolean | number;
export type ScreenType = 'radio'; // TODO: add other types

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
  fieldName: string;
  text: string;
  screenType: ScreenType;
  options: Option[];
}

export interface QuestionsResponse {
  questions: Question[];
}
