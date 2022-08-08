import React from 'react';
import SocialMedia from './SocialMedia';
import cv from '../resourse/cv';
import { useTranslation } from 'react-i18next';
const menu = [
  { id: 'aboutme', title: 'aboutme.title' },
  { id: 'skills', title: 'skill.title' },
  { id: 'experience', title: 'experience.title' },
];
const SideMenu = ({ clickHref }) => {
  const translate = useTranslation('common').t;
  return (
    <div className="mt-4 ml-4">
      <div className="avatar">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="avatar"
        />
      </div>
      <div className="name">
        <h1>{`${cv.firstName} ${cv.lastName}`}</h1>
        <span>{translate(cv.career)}</span>
      </div>
      <SocialMedia />
      <ul className="list-none list-menu">
        {menu.map((item) => (
          <li className="mb-4" key={`list-menu-item-${item.id}`}>
            <a href={`#${item.id}`} className="list-menu__a d-none-mobile">
              {translate(item.title)}
            </a>
            <a
              href={`#${item.id}`}
              className="list-menu__a d-none-desktop"
              onClick={clickHref ? clickHref : () => {}}
            >
              {translate(item.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideMenu;
