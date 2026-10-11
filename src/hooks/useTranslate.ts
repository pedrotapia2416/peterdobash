import type { TFunction } from 'i18next';

type TranslateParams = Record<string, unknown>;

export const useTranslate = (t: TFunction<string>) => {
  const translate = (key: string, params?: TranslateParams) => String(t(key, { ...(params || {}), defaultValue: key }));

  return { translate };
};
