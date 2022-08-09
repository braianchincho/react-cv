import React from 'react';
import { formatDate } from '../../resourse/dateFormater';
import { useTranslation } from 'react-i18next';

const Experience = (props) => {
  const translate = useTranslation('common').t;
  if (!props.experience) {
    return null;
  }
  const { institution, rol, startDate, endDate } = props.experience;
  return (
    <div className="mt-3 mb-3">
      <h5>{institution}</h5>
      <p>
        {rol} | {formatDate(startDate)} -{' '}
        {endDate ? formatDate(endDate) : translate('experience.today')}
      </p>
    </div>
  );
};

export default Experience;
