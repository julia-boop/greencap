import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations using http (default public/locales)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'es', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    }
  });

export default i18n;
