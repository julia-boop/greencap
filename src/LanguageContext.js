// import React, { createContext, useState } from 'react';
// import i18n from 'i18next';

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(i18n.language || 'es'); // Initialize with i18n's current language

//   const toggleLanguage = () => {
//     const newLanguage = language === 'es' ? 'en' : 'es';
//     setLanguage(newLanguage);
//     i18n.changeLanguage(newLanguage);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import i18n from './i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    console.log(language)
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
