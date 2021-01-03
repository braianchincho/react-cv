import React from "react";
import Experience from "./Experience";
const ExperienceList = ({ experienceList }) => {
  if (!experienceList) {
    return null;
  }
  return (
    <section className="mt-3">
      <h4 id="experience">Experience</h4>
      <div className="row mt-4">
        {experienceList.map(item => (
          <div className="col-12">
            <Experience
              id={item.id}
              institution={item.institution}
              rol={item.rol}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExperienceList;
