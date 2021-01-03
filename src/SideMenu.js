import React from "react";
const SideMenu = ({ toggleMenu }) => {
  return (
    <div>
      <div className="avatar">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="avatar"
        />
      </div>
      <div className="name">
        <h1>Braian Chincho</h1>
        <span>Ing en sitemas</span>
      </div>
      <ul className="list-none list-menu">
        <li className="mb-4">
          <a
            href="#aboutme"
            className="list-menu__a"
            onClick={() => toggleMenu()}
          >
            About Me
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#education"
            className="list-menu__a"
            onClick={() => toggleMenu()}
          >
            Education
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#skills"
            className="list-menu__a"
            onClick={() => toggleMenu()}
          >
            Skills
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#experience"
            className="list-menu__a"
            onClick={() => toggleMenu()}
          >
            Experience
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;
