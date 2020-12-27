import React from "react";
import { formatDate } from "../resourse/dateFormater";
const Experience = ({ institution, rol, startDate, endDate }) => {
  return (
    <div>
      <h5>{institution}</h5>
      <h6>{rol}</h6>
      <p>
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Presente"}
      </p>
    </div>
  );
};

export default Experience;
