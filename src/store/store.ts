import { createWrapper } from 'next-redux-wrapper';
import questionnaireReducer from '@/store/questionnaire/questionnaire-slice';
import { configureStore } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({
    reducer: {
      questionnaire: questionnaireReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
