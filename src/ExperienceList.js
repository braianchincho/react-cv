import React from 'react';
import Experience from './Experience';
import { useTranslation } from 'react-i18next';

const ExperienceList = ({ experienceList }) => {
  const translate = useTranslation('common').t;
  if (!experienceList) {
    return null;
  }
  return (
    <section id="experience" className="mt-3">
      <h4>{translate('experience.title')}</h4>
      <div className="row mt-4">
        {experienceList.map((item) => (
          <div className="col-12" key={item.id}>
            <Experience experience={item} key={item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExperienceList;
