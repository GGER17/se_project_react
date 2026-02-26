import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleSignOut, handleOpenEditProfileModal }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      {" "}
      <aside className="sidebar__row">
        {" "}
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt="User avatar"
            className="sidebar__avatar"
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar-placeholder">
            {" "}
            {currentUser.name?.charAt(0).toUpperCase()}{" "}
          </div>
        )}{" "}
        <p className="sidebar__username">{currentUser.name}</p>{" "}
      </aside>{" "}
      <div className="sidebar__btns">
        <button
          className="sidebar__profile-data"
          onClick={handleOpenEditProfileModal}
        >
          Change profile data
        </button>
        <button className="sidebar__logout-btn" onClick={handleSignOut}>
          {" "}
          Log out{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default SideBar;
