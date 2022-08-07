import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/hamburger.css';
import './css/sidebar.css';
import Principal from './Principal';
import SideMenu from './SideMenu';
import { useTranslation } from 'react-i18next';

export default function App() {
  const [isOpen, setOpen] = React.useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const { t, i18n } = useTranslation('common');

  return (
    <div className="wrapper">
      <nav id="sidebar" className={`${isOpen ? 'active' : ''}`}>
        <div className="mobile-bar">
          <button
            className={`hamburger hamburger--slider js-hamburger ${
              isOpen ? 'is-active' : ''
            }`}
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <SideMenu clickHref={toggleMenu} />
      </nav>
      <div id="content" className={`${isOpen ? 'active' : ''}`}>
        <Principal />
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} />
    </div>
  );
}
