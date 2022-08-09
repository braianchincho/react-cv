import React from 'react';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from '../translations/en/common.json';
import common_es from '../translations/es/common.json';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
document.title = 'curriculum vitae';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
