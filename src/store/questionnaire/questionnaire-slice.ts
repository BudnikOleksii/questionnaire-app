import { type Answer, type QuestionId } from '@/types/questionnaire';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AnswerPayload {
  questionId: QuestionId;
  answer: Answer;
}

export interface QuestionnaireState {
  answers: Record<QuestionId, Answer>;
}

const initialState: QuestionnaireState = {
  answers: {},
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerPayload>) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
  },
});

export const { addAnswer } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
