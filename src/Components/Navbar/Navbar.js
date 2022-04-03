import { Link } from "react-router-dom";
// import { NavBrandImg } from "../../assets";
import { useState } from "react";
import "./Navbar.css";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BrandImage } from "../../Assets";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => (isDrawerOpen ? false : true));
  return (
    <header className="navbar">
      <div className="mobile-view">
        <Link to="/" className="navbar-brand">
          <img src={BrandImage} alt="navbrand" />
        </Link>

        <div className="drawer">
          <AiOutlineMenu className="drawer nav-icons" onClick={toggleDrawer} />
          {isDrawerOpen ? (
            <ul>
              <Link to="/login">
                <li className="headline4">Login</li>
              </Link>

              <Link to="/cart">
                <li className="headline4">Cart</li>
              </Link>
              <Link to="/wishlist">
                <li className="headline4">Wishlist</li>
              </Link>
            </ul>
          ) : null}
        </div>
      </div>
      <div className="search-box mr-3">
        <input type="text" name="search-box" id="search" placeholder="search" />
        <BsSearch className="nav-icons" />
      </div>
      <nav className="flex ">
        <Link to="/login">
          <button className="btn btn-outline ml-2 semibold">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
