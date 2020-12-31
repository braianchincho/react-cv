import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Principal from "./Principal";
import SideMenu from "./SideMenu";
export default function App() {
  const [width, setWidth] = React.useState(280);
  const [translate, setTranslate] = React.useState(0);
  const [xPosition, setX] = React.useState(0);
  const toggleMenu = () => {
    console.log(width, xPosition);
    setX(xPosition < 0 ? 0 : -width);
    // setTranslate(xPosition0 ? 280 : -280);
  };

  return (
    <main>
      <div className="pull-left">
        <div
          className="menu"
          style={{
            transform: `translatex(${xPosition}px)`,
            width: width
          }}
        >
          <div className="mobile-bar">
            <div className="hamburger-menu" onClick={() => toggleMenu()}>
              <div className="bar" />
            </div>
          </div>
          <SideMenu />
        </div>
      </div>
      <div
        className="pull-rigth content"
        style={{
          transform: `translate(${xPosition}px)`
        }}
      >
        <Principal />
      </div>
    </main>
  );
}
