import React from "react";
import Skill from "./Skill";
const SkillList = ({ skillList }) => {
  if (!skillList) {
    return null;
  }
  return (
    <section id="skills" className="mt-3">
      <h4>Skills</h4>
      <div className="row mt-4">
        {skillList.map(item => (
          <div className="col-12 col-sm-6 col-md-6 mt-3 mb-3" key={item.id}>
            <Skill key={`skill-item-${item.id}`} skill={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillList;
