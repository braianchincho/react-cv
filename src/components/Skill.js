import React from "react";
const Skill = props => {
  if (!props.skill) {
    return null;
  }
  const { name, level } = props.skill;
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <h5 className="">{name}</h5>
        <p className="">{level} %</p>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={level}
          style={{ width: `${level}%` }}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};
export default Skill;
