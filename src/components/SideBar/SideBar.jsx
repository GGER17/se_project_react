import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <aside className="sidebar__row">
        <img src={avatar} alt="User's avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </aside>
    </div>
  );
}

export default SideBar;
