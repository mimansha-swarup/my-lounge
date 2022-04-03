import { NavLink } from "react-router-dom";
import {
  RiHome2Line,
  RiThumbUpLine,
  RiTimeLine,
  RiVideoLine,
  RiMenuUnfoldFill,
  RiHistoryLine,
} from "react-icons/ri";
import "./Sidebar.css";
import { BrandImage } from "../../Assets";

const SideBar = () => {
  const activeStyle={
    backgroundColor: "#28293D",
    padding:".55rem .5rem",
    boxShadow:"0rem 0rem 0.0625rem rgba(0, 0, 0, 0.04), 0rem 0.125rem .25rem rgba(0, 0, 0, 0.32)"

  }
  return (
    <aside className="sidebar">
      <div className="logo-cont">
        <img src={BrandImage} alt="brandImage"  />
      </div>
      <hr className="line-horz" />
      <NavLink  to="/"  style={({isActive}) =>isActive? activeStyle:null }  className="sidebar-title ">
        {" "}
        <RiHome2Line className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">Home</span>{" "}
      </NavLink>
      <NavLink to="/video"  style={({isActive}) =>isActive? activeStyle:null }  className="sidebar-title ">
        {" "}
        <RiVideoLine className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">Videos</span>{" "}
      </NavLink>
      <NavLink to="/liked-video" style={({isActive}) =>isActive? activeStyle:null }   className="sidebar-title ">
        {" "}
        <RiThumbUpLine className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">Liked</span>{" "}
      </NavLink>
      <hr className="line-horz" />
      <NavLink to="/watch-later" style={({isActive}) =>isActive? activeStyle:null }   className="sidebar-title ">
        {" "}
        <RiTimeLine className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">Watch Later</span>{" "}
      </NavLink>
      <NavLink to="/playlist"  style={({isActive}) =>isActive? activeStyle:null }  className="sidebar-title ">
        {" "}
        <RiMenuUnfoldFill className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">Playlist</span>{" "}
      </NavLink>
      <NavLink to="/history"  style={({isActive}) =>isActive? activeStyle:null }  className="sidebar-title ">
        {" "}
        <RiHistoryLine className="sidebar-icons" />{" "}
        <span className="label subtitle1 semibold">History</span>{" "}
      </NavLink>
    </aside>
  );
};

export default SideBar;
