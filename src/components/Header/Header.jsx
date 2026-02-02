import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import nothamburger from "../../assets/nothamburger.svg";
import avatar from "../../assets/avatar.svg";
import { useState } from "react";
import "./Header.css";
import xblack from "../../assets/xblack.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleOpenAddGarmentModal, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  function toggleMobileMenu() {
    setIsMobileMenuOpened((prev) => !prev);
  }
  const isMobile = window.innerWidth <= 768;

  return (
    <header className="header">
      <div className="header__side">
        <div className="header__mobile-group">
          <Link className="header__link" to="/">
            {" "}
            <img src={logo} alt="WTWR Logo" className="header__logo" />
          </Link>
          {!isMobileMenuOpened && (
            <button
              onClick={toggleMobileMenu}
              className="header__nothamburger-btn"
            >
              {" "}
              <img
                src={nothamburger}
                alt="Open menu"
                className="header__nothamburger-img"
              />
            </button>
          )}{" "}
          {isMobile && isMobileMenuOpened && (
            <div
              className={`mobile-menu ${isMobileMenuOpened ? "mobile-menu_open" : ""}`}
            >
              {" "}
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu__close-btn"
              >
                <img
                  src={xblack}
                  alt="Close menu"
                  className="header__nothamburger-img"
                />
              </button>
              <div className="mobile-menu__contents">
                <div className="mobile-menu__group">
                  <p className="header__username mobile-menu__username">
                    Terrence Tegegne
                  </p>{" "}
                  <img
                    src={avatar}
                    alt="User's avatar"
                    className="header__avatar mobile-menu__avatar"
                  />{" "}
                </div>
                <button
                  onClick={handleOpenAddGarmentModal}
                  className="header__add-btn mobile-menu__add-btn"
                >
                  {" "}
                  + Add clothes{" "}
                </button>{" "}
              </div>
            </div>
          )}
        </div>
        <p className="header__place">
          {" "}
          <time dateTime="2026-15-01" className="header__time">
            {currentDate}
          </time>
          , {weatherData.city}
        </p>
      </div>
      <div className="header__side">
        <ToggleSwitch />
        <div className="header__hidden-group">
          <button
            onClick={handleOpenAddGarmentModal}
            className="header__add-btn"
          >
            + Add clothes
          </button>
          <Link className="header__link" to="/profile">
            <p className="header__username">Terrence Tegegne</p>
            <img src={avatar} alt="User's avatar" className="header__avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
