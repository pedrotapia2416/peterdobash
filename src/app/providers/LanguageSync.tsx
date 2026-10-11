import { useEffect } from 'react';
import { i18next } from '../i18n/i18n';
import { useAppSelector } from '../store/hooks';

export function LanguageSync() {
  const currentLanguage = useAppSelector((state) => state.language.current);

  useEffect(() => {
    if (i18next.resolvedLanguage !== currentLanguage) {
      void i18next.changeLanguage(currentLanguage);
    }
  }, [currentLanguage]);

  return null;
}
