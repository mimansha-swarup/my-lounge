import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import { BrandImage } from "../../Assets";
import { labels, secondaryLabels } from "../../Helper";

const SideBar = () => {
  const activeStyle = {
    backgroundColor: "#28293D",
    padding: ".55rem .5rem",
    boxShadow:
      "0rem 0rem 0.0625rem rgba(0, 0, 0, 0.04), 0rem 0.125rem .25rem rgba(0, 0, 0, 0.32)",
  };


  

  return (
    <aside className="sidebar">
      <div className="logo-cont">
        <img src={BrandImage} className="img-responsive" alt="brandImage" />
      </div>
      <hr className="line-horz" />
      {labels.map((eachLabel) => (
        <NavLink
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
  
      {secondaryLabels.map((eachLabel) => (
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
