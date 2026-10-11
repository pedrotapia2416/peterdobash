import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SupportedLanguage } from '../../config/i18next-config';

const languageStorageKey = 'peter-do-bash.language';

export const getStoredLanguage = (): SupportedLanguage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  return storedLanguage === 'en' || storedLanguage === 'es' ? storedLanguage : null;
};

export const persistLanguage = (language: SupportedLanguage) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(languageStorageKey, language);
};

type LanguageState = {
  current: SupportedLanguage;
};

const initialState: LanguageState = {
  current: getStoredLanguage() || 'es',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<SupportedLanguage>) => {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
