import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Principal from "./Principal";
import SideMenu from "./SideMenu";
export default function App() {
  const [isOpen, setOpen] = React.useState(true);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div class="wrapper">
      <div className={`menu ${isOpen ? "menu-push" : "menu-unpush"}`}>
        <div className="mobile-bar">
          <div className="hamburger-menu" onClick={() => toggleMenu()}>
            <div className="bar" />
          </div>
        </div>
        <SideMenu toggleMenu={toggleMenu} />
      </div>
      <div className={`content ${isOpen ? "content-push" : "content-unpush"}`}>
        <Principal />
      </div>
    </div>
  );
}
