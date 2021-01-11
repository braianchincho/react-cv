import React from "react";
import { formatDate } from "../resourse/dateFormater";
const AboutMe = props => {
  const { birthday, location, mail, description } = props.aboutMe;
  return (
    <section id="aboutme" className="mt-4 mb-4">
      <h4>About me</h4>
      <p className="mt-4">{description}</p>
      <p>
        <strong>Birthday:</strong> {formatDate(birthday)}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Email:</strong> {mail}
      </p>
    </section>
  );
};

export default AboutMe;
