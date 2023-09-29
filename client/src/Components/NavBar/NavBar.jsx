import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useLocation } from "react-router-dom";


const NavBar = () => {

const location = useLocation();

  return (
    <div className={style.NavBar}>
      <div className={style.NavButtons}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>

        <NavLink to="/create">
          { location.pathname === '/home'
            ?
          <button>Create Dog</button>
          : null
          }
        </NavLink>
      </div> 
    </div>
  );
};

export default NavBar;
