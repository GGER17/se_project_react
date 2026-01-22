import logo from "../../assets/logo.svg";
import nothamburger from "../../assets/nothamburger.svg";
import avatar from "../../assets/avatar.svg";
import { useState } from "react";
import "./Header.css";
import xblack from "../../assets/xblack.svg";

function Header({ handleOpenAddGarmentModal, handleOpenNavModal }) {
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
      <div className="header__mobile-group">
        <img src={logo} alt="WTWR Logo" className="header__logo" />
        <button onClick={toggleMobileMenu} className="header__nothamburger-btn">
          {" "}
          {!isMobileMenuOpened ? (
            <img
              src={nothamburger}
              alt="Open menu"
              className="header__nothamburger-img"
            />
          ) : (
            <img
              src={xblack}
              alt="Close menu"
              className="header__nothamburger-img"
            />
          )}{" "}
        </button>

        {isMobile && isMobileMenuOpened && (
          <div
            className={`mobile-menu ${isMobileMenuOpened ? "mobile-menu_open" : ""}`}
          >
            {" "}
            <button
              onClick={handleOpenAddGarmentModal}
              className="header__add-btn"
            >
              {" "}
              + Add clothes{" "}
            </button>{" "}
            <p className="header__username">Terrence Tegegne</p>{" "}
            <img
              src={avatar}
              alt="User's avatar"
              className="header__avatar"
            />{" "}
          </div>
        )}
      </div>
      <p className="header__place">
        {" "}
        <time dateTime="2026-15-01" className="header__time">
          {currentDate}
        </time>
        , New York
      </p>
      <div className="header__hidden-group">
        <button onClick={handleOpenAddGarmentModal} className="header__add-btn">
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="User's avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
