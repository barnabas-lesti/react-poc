import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { appI18n } from '../app/appI18n';
import { searchI18n } from '../search/searchI18n';

export type AppTranslationType = {
  en: {
    [key: string]: string,
  },
  hu: {
    [key: string]: string,
  },
}

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...appI18n.en,
          ...searchI18n.en,
        }
      },
      hu: {
        translation: {
          ...appI18n.hu,
          ...searchI18n.hu,
        }
      },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const i18n = i18next;
