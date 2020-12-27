import React from "react";
import { formatDate } from "../resourse/dateFormater";
const Experience = ({ institution, rol, startDate, endDate }) => {
  return (
    <div className="mt-3 mb-3">
      <h5>{institution}</h5>
      <p>
        {rol} | {formatDate(startDate)} -{" "}
        {endDate ? formatDate(endDate) : "Presente"}
      </p>
    </div>
  );
};

export default Experience;
