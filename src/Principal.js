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
        <AboutMe key="aboutme-component" aboutMe={cv.aboutMe} />
        <SkillList key="skills-component" skillList={cv.skills} />
        <ExperienceList
          key="experience-component"
          experienceList={cv.experience}
        />
      </div>
    );
  }
}
