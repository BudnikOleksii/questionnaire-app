export type QuestionId = number;
export type Answer = string | boolean | number;
export type ScreenType = 'radio' | 'info'; // TODO: add other types
// TODO: fix this type
// export type ConditionalString<T extends string> = T extends `${string}?${number}:${number}`
//   ? T
//   : never;
export type ConditionalString = string;

export interface Option {
  id: number;
  value: Answer;
  text: string;
  nextQuestionId: QuestionId | ConditionalString;
}

export interface Question {
  id: QuestionId;
  slug: string;
  name: string;
  text: string;
  description?: string;
  screenType: ScreenType;
  options: Option[];
  isFirstScreen?: boolean;
  isLastScreen?: boolean;
}

export interface QuestionsResponse {
  questions: Question[];
}
