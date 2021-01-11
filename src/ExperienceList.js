import React from "react";
import Experience from "./Experience";
const ExperienceList = ({ experienceList }) => {
  if (!experienceList) {
    return null;
  }
  return (
    <section id="experience" className="mt-3">
      <h4>Experience</h4>
      <div className="row mt-4">
        {experienceList.map(item => (
          <div className="col-12">
            <Experience experience={item} id={item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExperienceList;
