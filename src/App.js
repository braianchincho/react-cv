import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Principal from "./Principal";
import SideMenu from "./SideMenu";
export default function App() {
  const [width, setWidth] = React.useState(280);
  const [translate, setTranslate] = React.useState(0);
  const [xPosition, setX] = React.useState(0);
  const [isOpen, setOpen] = React.useState(true);
  const toggleMenu = () => {
    console.log(width, xPosition);
    setX(xPosition < 0 ? 0 : -width);
    setOpen(!isOpen);
    // setTranslate(xPosition0 ? 280 : -280);
  };

  return (
    <div class="wrapper">
      <div className={`menu ${isOpen ? "menu-push" : "menu-unpush"}`}>
        <div className="mobile-bar">
          <div className="hamburger-menu" onClick={() => toggleMenu()}>
            <div className="bar" />
          </div>
        </div>
        <SideMenu />
      </div>
      <div className={`content ${isOpen ? "content-push" : "content-unpush"}`}>
        <Principal />
      </div>
    </div>
  );
}
