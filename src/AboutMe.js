import React from 'react';
import { formatDate } from '../resourse/dateFormater';
import { useTranslation } from 'react-i18next';

const AboutMe = (props) => {
  const translate = useTranslation('common').t;
  const { birthday, location, mail, description } = props.aboutMe;
  return (
    <section id="aboutme" className="mt-4 mb-4">
      <h4>{translate('aboutme.title')}</h4>
      <p className="mt-4">{translate(description)}</p>
      <p>
        <strong>{translate('aboutme.birthday')}: </strong>{' '}
        {formatDate(birthday)}
      </p>
      <p>
        <strong>{translate('aboutme.location')}: </strong> {location}
      </p>
      <p>
        <strong>{translate('aboutme.email')}: </strong> {mail}
      </p>
    </section>
  );
};

export default AboutMe;
