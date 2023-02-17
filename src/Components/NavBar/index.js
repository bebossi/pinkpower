import style from "./style.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbarLogo}>
        <Link to="/">Home</Link>
      </div>

      <div
        className={`${style.navbarLinks} ${
          isNavOpen ? style.navbarLinksOpen : ""
        }`}
      >
        <Link to="/create">Create</Link>
        <Link to={`/editCharacter/${useLocation().pathname.split("/")[2]}`}>
          Edit
        </Link>
        <Link to="/aboutUs">About us</Link>

      </div>

      <button className={style.navbarToggle} onClick={handleNavToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
