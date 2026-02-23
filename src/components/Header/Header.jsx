import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import nothamburger from "../../assets/nothamburger.svg";
import avatar from "../../assets/avatar.svg";
import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";
import xblack from "../../assets/xblack.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleOpenAddGarmentModal,
  weatherData,
  handleOpenLoginModal,
  handleOpenRegisterModal,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

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
                {isLoggedIn ? (
                  <div className="mobile-menu__group">
                    {" "}
                    <p className="header__username mobile-menu__username">
                      {" "}
                      {currentUser.name}{" "}
                    </p>{" "}
                    {currentUser.avatar ? (
                      <img
                        src={currentUser.avatar}
                        alt="User avatar"
                        className="header__avatar mobile-menu__avatar"
                      />
                    ) : (
                      <div className="header__avatar-placeholder mobile-menu__avatar">
                        {" "}
                        {currentUser.name?.charAt(0).toUpperCase()}{" "}
                      </div>
                    )}{" "}
                  </div>
                ) : (
                  <div className="mobile-menu__auth">
                    {" "}
                    <button
                      className="header__auth-btn"
                      onClick={handleOpenRegisterModal}
                    >
                      {" "}
                      Sign up{" "}
                    </button>{" "}
                    <button
                      className="header__auth-btn"
                      onClick={handleOpenLoginModal}
                    >
                      {" "}
                      Log in{" "}
                    </button>{" "}
                  </div>
                )}
                {isLoggedIn && (
                  <button
                    onClick={handleOpenAddGarmentModal}
                    className="header__add-btn"
                  >
                    {" "}
                    + Add clothes{" "}
                  </button>
                )}
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
          {isLoggedIn && (
            <button
              onClick={handleOpenAddGarmentModal}
              className="header__add-btn"
            >
              {" "}
              + Add clothes{" "}
            </button>
          )}
          {isLoggedIn ? (
            <Link className="header__link" to="/profile">
              {" "}
              <p className="header__username">{currentUser.name}</p>{" "}
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="User avatar"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {" "}
                  {currentUser.name?.charAt(0).toUpperCase()}{" "}
                </div>
              )}{" "}
            </Link>
          ) : (
            <div className="header__auths">
              <button
                className="header__auth-btn"
                onClick={handleOpenRegisterModal}
              >
                {" "}
                Sign up{" "}
              </button>{" "}
              <button
                className="header__auth-btn"
                onClick={handleOpenLoginModal}
              >
                {" "}
                Log in{" "}
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
