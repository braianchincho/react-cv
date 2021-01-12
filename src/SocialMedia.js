import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithubAlt,
  faGithub,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () => {
  return (
    <ul className="social-media">
      <li className="social-media--item">
        <a href="https://github.com/braianchincho" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="social-media--item">
        <a
          href="https://www.linkedin.com/in/braian-ismael-chincho-bb1004144/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
