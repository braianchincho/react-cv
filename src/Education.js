import React from "react";

const Education = ({ institution, career, state }) => {
  return (
    <div className="mt-3 mb-3">
      <h5>{institution}</h5>
      <h6 className="sub-title">
        {career} | {state}
      </h6>
    </div>
  );
};

export default Education;
