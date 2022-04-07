import { NavLink } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import "./Sidebar.css";
import { BrandImage } from "../../Assets";
import { labels, secondaryLabels } from "../../Helper";
import { useAuth } from "../../Context";

const SideBar = () => {
  const activeStyle = {
    backgroundColor: "#28293D",
    padding: ".55rem .5rem",
    boxShadow:
      "0rem 0rem 0.0625rem rgba(0, 0, 0, 0.04), 0rem 0.125rem .25rem rgba(0, 0, 0, 0.32)",
  };

  const { authState } = useAuth();

  return (
    <aside className="sidebar">
      <div className="logo-cont">
        <img src={BrandImage} className="img-responsive" alt="brandImage" />
      </div>
      <hr className="line-horz" />
      <NavLink
        to="/user"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        className="sidebar-title user-label"
      >
        {" "}
        <RiUser3Line className="sidebar-icons mr-2" />{" "}
        <span className="label subtitle1 semibold">
          {authState?.name || "User"}
        </span>{" "}
      </NavLink>

      {labels.map((eachLabel,i) => (
        <NavLink
        key={i}
          to={eachLabel.path}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="sidebar-title "
        >
          {" "}
          {eachLabel.icon}{" "}
          <span className="label subtitle1 semibold">{eachLabel.label}</span>{" "}
        </NavLink>
      ))}

      <hr className="line-horz" />

      {secondaryLabels.map((eachLabel,i) => (
        <NavLink
          to={eachLabel.path}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="sidebar-title secondary-links "
        >
          {" "}
          {eachLabel.icon}{" "}
          <span className="label subtitle1 semibold">{eachLabel.label}</span>{" "}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
