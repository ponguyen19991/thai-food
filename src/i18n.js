import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../src/locales/en.json';
import translationTH from '../src/locales/th.json';
import translationVN from '../src/locales/vn.json';

const resources = {
    en: {
      translation: translationEN
    },
    th: {
      translation: translationTH
    },
    vn: {
      translation: translationVN
    }
  };

  i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;