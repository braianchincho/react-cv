import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const menu = [
  { id: "aboutme", title: "About Me" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" }
];
const SideMenu = ({ clickHref }) => {
  return (
    <div className="mt-4 ml-4">
      <div className="avatar">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="avatar"
        />
      </div>
      <div className="name">
        <h1>Braian Chincho</h1>
        <span>Ing en sistemas</span>
      </div>
      <ul className="social-media">
        <li className="social-media--item">
          <a
            href="https://www.linkedin.com/in/braian-ismael-chincho-bb1004144/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </li>
        <li className="social-media--item">
          <a href="https://github.com/braianchincho" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <ul className="list-none list-menu">
        {menu.map(item => (
          <li className="mb-4" key={`list-menu-item-${item.id}`}>
            <a href={`#${item.id}`} className="list-menu__a d-none-mobile">
              {item.title}
            </a>
            <a
              href={`#${item.id}`}
              className="list-menu__a d-none-desktop"
              onClick={clickHref ? clickHref : () => {}}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideMenu;
