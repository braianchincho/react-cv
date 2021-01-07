import React from "react";
import AboutMe from "./AboutMe";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import SkillList from "./SkillList";
import cv from "../resourse/cv";
export default class Principal extends React.Component {
  render() {
    return (
      <div className="container-cv">
        <AboutMe id="aboutme-component" aboutMe={cv.aboutMe} />

        <EducationList id="eduaction-component" educationList={cv.education} />

        <SkillList id="skills-component" skillList={cv.skills} />

        <ExperienceList
          id="experienceL-component"
          experienceList={cv.experience}
        />
      </div>
    );
  }
}
