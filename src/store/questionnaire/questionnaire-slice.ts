import { type Answer } from '@/types/questionnaire';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AnswerPayload {
  questionName: string;
  answer: Answer;
}

export interface QuestionnaireState {
  answers: Record<string, Answer>;
}

const initialState: QuestionnaireState = {
  answers: {},
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerPayload>) => {
      const { questionName, answer } = action.payload;
      state.answers[questionName] = answer;
    },
  },
});

export const { addAnswer } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
