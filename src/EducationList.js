import React from "react";
import Education from "./Education";
const EducationList = ({ educationList }) => {
  if (!educationList) {
    return null;
  }
  return (
    <section id="education" className="mt-3">
      <h4>Education</h4>
      <div className="row mt-4">
        {educationList.map(item => (
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
