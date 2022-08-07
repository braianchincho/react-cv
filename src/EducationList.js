import React from 'react';
import Education from './Education';
import { useTranslation } from 'react-i18next';

const EducationList = ({ educationList }) => {
  const translate = useTranslation('common').t;
  if (!educationList) {
    return null;
  }
  return (
    <section id="education" className="mt-4">
      <h4>{translate('education.title')}Education</h4>
      <div className="row mt-4">
        {educationList.map((item) => (
          <div className="col-12">
            <Education
              id={item.id}
              institution={item.institution}
              career={item.career}
              state={item.state}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default EducationList;
