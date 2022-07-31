import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { config } from '../config';
import { en } from './resources/en';
import { hu } from './resources/hu';

export const languages = {
  DEFAULT_LANGUAGE: config.DEFAULT_LANGUAGE,
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
