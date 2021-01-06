import React from "react";
const menu = [
  { id: "aboutme", title: "About Me" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" }
];
const SideMenu = () => {
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
        <span>Ing en sistemas</span>
      </div>
      <ul className="list-none list-menu">
        {menu.map(item => (
          <li className="mb-4" id={`list-menu-item-${item.id}`}>
            <a href={`#${item.id}`} className="list-menu__a">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideMenu;
