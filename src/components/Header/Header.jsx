import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

function Header({ handleOpenAddGarmentModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR Logo" className="header__logo" />
      <p className="header__place">
        {" "}
        <time dateTime="2026-15-01" className="header__time">
          {currentDate}
        </time>
        , New York
      </p>
      <button onClick={handleOpenAddGarmentModal} className="header__add-btn">
        + Add clothes
      </button>
      <p className="header__username">Terrence Tegegne</p>
      <img src={avatar} alt="User's avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
