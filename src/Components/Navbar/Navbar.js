import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

import { BrandImage } from "../../Assets";
import { useAuth, useFilters } from "../../Context";
import { useIsFullScreen } from "../../Helper/Hooks/fullScreen";
import { filterActions } from "../../Reducer/constant";

const Navbar = () => {

  const {authState,Logout} =   useAuth()
  const{filterDispatch} =useFilters()

  const isFullScreen = useIsFullScreen("/video/")
 



  
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
        <input type="text" name="search-box" id="search" placeholder="search"
         onChange={(event) =>
          filterDispatch({
            type: filterActions.SET_SEARCH_QUERY,
            payload: event.target.value,
          })
        }
        />
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
