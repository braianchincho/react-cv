import React from "react";

const Education = ({ institution, career, state }) => {
  return (
    <div>
      <h5>{institution}</h5>
      <h6>{career}</h6>
      <p>{state}</p>
    </div>
  );
};

export default Education;
