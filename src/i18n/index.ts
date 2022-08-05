import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { appI18n } from '../app/app-i18n';
import { searchI18n } from '../search/search-i18n';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          app: appI18n.en,
          search: searchI18n.en,
        }
      },
      hu: {
        translation: {
          app: appI18n.hu,
          search: searchI18n.hu,
        }
      },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const i18n = i18next;
