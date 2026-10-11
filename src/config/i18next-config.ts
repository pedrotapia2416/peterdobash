import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '../translations/en/common.json';
import homeEn from '../translations/en/home.json';
import journeyPageEn from '../translations/en/journeyPage.json';
import soundPageEn from '../translations/en/soundPage.json';
import commonEs from '../translations/es/common.json';
import homeEs from '../translations/es/home.json';
import journeyPageEs from '../translations/es/journeyPage.json';
import soundPageEs from '../translations/es/soundPage.json';

export const supportedLanguages = ['es', 'en'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === 'undefined') {
    return 'es';
  }

  const storedLanguage = window.localStorage.getItem('peter-do-bash.language');

  return storedLanguage === 'en' || storedLanguage === 'es' ? storedLanguage : 'es';
};

i18n.use(initReactI18next).init({
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  defaultNS: 'common',
  returnObjects: true,
  resources: {
    es: {
      common: commonEs,
      home: homeEs,
      journeyPage: journeyPageEs,
      soundPage: soundPageEs,
    },
    en: {
      common: commonEn,
      home: homeEn,
      journeyPage: journeyPageEn,
      soundPage: soundPageEn,
    },
  },
});

export default i18n;
