import React from "react";
import AboutMe from "./AboutMe";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import SkillList from "./SkillList";
import cv from "../resourse/cv";
export default class Principal extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>CV</h1>
        <AboutMe aboutMe={cv.aboutMe} />

        <EducationList educationList={cv.education} />

        <SkillList skillList={cv.skills} />

        <ExperienceList experienceList={cv.experience} />
      </div>
    );
  }
}
