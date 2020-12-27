import React from "react";
import { formatDate } from "../resourse/dateFormater";
const AboutMe = props => {
  const { birthday, location, mail } = props.aboutMe;
  return (
    <section id="aboutme" className="mt-3">
      <h4>About me</h4>
      <p className="mt-4">
        Hello, My name is John Doe. Lorem ipsum dolor sit amet, usu sumo dicant
        vulputate in. Quando fabellas adipiscing nam an. An vis congue oporteat,
        no eros facer suavitate eos. An debet affert aliquid ius. Veritus
        placerat est ea, est ne nominavi suscipit maluisset.
      </p>
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
