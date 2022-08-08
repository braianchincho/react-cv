import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="select-language">
      <select
        className="form-select"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
        aria-label={t('language.aria.select')}
        id="select-language"
      >
        <option value="en" id="en">
          {t('language.en')}
        </option>
        <option value="es" id="es">
          {t('language.es')}
        </option>
      </select>
    </div>
  );
};
export default SelectLanguage;
