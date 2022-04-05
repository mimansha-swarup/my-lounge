import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BrandImage } from "../../Assets";
import { useAuth } from "../../Context";
import { useIsFullScreen } from "../../Helper/Hooks/fullScreen";

const Navbar = () => {

  const {authState,Logout} =   useAuth()

  const isFullScreen = useIsFullScreen("/video/")
 

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => (isDrawerOpen ? false : true));
  return (
    <header className={isFullScreen?" navbar full-navbar":"navbar"}>
    
        <Link to="/" className="navbar-brand">
          <img src={BrandImage} className="img-responsive" alt="navbrand" />
        </Link>
        <div className="drawer">
        {
         authState?.isAuth ?(

           <button onClick={Logout} className="drawer  btn btn-contained "  >Logout</button>
         ):(

           <Link to="/login">
        
           <button className="drawer  btn btn-contained "  >Login</button>
        </Link>
         )
}
       
      </div>


  
      <div className="search-box">
        <input type="text" name="search-box" id="search" placeholder="search" />
        <BsSearch className="nav-icons" />
      </div>
      <nav className="flex ">
       {
         authState?.isAuth ?(
           <button className="btn btn-contained ml-2 semibold" onClick={Logout} >Logout</button>

         ):(

           <Link to="/login">
          <button className="btn btn-contained ml-2 semibold">Login</button>
        </Link>
          )
        }
      </nav>
    </header>
  );
};

export default Navbar;
