import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { hu } from './hu';

export const languages = {
  DEFAULT_LANGUAGE: 'en',
  EN: 'en',
  HU: 'hu',
};

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en,
      hu,
    },
    lng: languages.DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

export const i18n = i18next;
