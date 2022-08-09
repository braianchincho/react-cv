import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/hamburger.css';
import './css/sidebar.css';
import React from 'react';
import AboutMe from './components/AboutMe';
import ExperienceList from './components/ExperienceList';
import SkillList from './components/SkillList';
import SelectLanguage from './components/SelectLanguage';
import cv from '../components/resourse/cv';
import './fontawesome';
import SideMenu from './components/SideMenu';

export default function App() {
  const [isOpen, setOpen] = React.useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar" className={`${isOpen ? 'active' : ''}`}>
        <div className="mobile-bar">
          <button
            className={`hamburger hamburger--slider js-hamburger ${
              isOpen ? 'is-active' : ''
            }`}
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <SideMenu clickHref={toggleMenu} />
      </nav>
      <div id="content" className={`${isOpen ? 'active' : ''}`}>
        <div className="container-cv">
          <SelectLanguage />
          <AboutMe key="aboutme-component" aboutMe={cv.aboutMe} />
          <SkillList key="skills-component" skillList={cv.skills} />
          <ExperienceList
            key="experience-component"
            experienceList={cv.experience}
          />
        </div>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} />
    </div>
  );
}
