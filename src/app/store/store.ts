import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { languageReducer, persistLanguage, setLanguage } from './languageSlice';

const languageListenerMiddleware = createListenerMiddleware();

languageListenerMiddleware.startListening({
  actionCreator: setLanguage,
  effect: (action) => {
    persistLanguage(action.payload);
  },
});

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(languageListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
