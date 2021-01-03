import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./hamburger.css";
import Principal from "./Principal";
import SideMenu from "./SideMenu";
export default function App() {
  const [isOpen, setOpen] = React.useState(true);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className={`menu ${isOpen ? "menu-push" : "menu-unpush"}`}>
        <div className="mobile-bar">
          <button
            className={`hamburger hamburger--slider js-hamburger ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <SideMenu toggleMenu={toggleMenu} />
      </div>
      <div className={`content ${isOpen ? "content-push" : "content-unpush"}`}>
        <Principal />
      </div>
    </div>
  );
}
