import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Principal from "./Principal";
import SideMenu from "./SideMenu";
export default function App() {
  return (
    <main>
      <div className="pull-left">
        <div className="menu">
          <SideMenu />
        </div>
      </div>
      <div className="pull-rigth content">
        <Principal />
      </div>
    </main>
  );
}
