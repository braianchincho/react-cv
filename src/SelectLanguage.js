import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="select-language">
      <select
        class="form-select"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
        aria-label="language.aria.select"
      >
        <option value="en">{t('language.en')}</option>
        <option value="es">{t('language.en')}</option>
      </select>
    </div>
  );
};
export default SelectLanguage;
