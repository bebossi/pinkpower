import style from "./style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

      <button className={style.navbarToggle} onClick={handleNavToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${style.navbarLinks} ${
          isNavOpen ? style.navbarLinksOpen : ""
        }`}
      >
        <Link to="/create">Create</Link>
        <Link to="/editCharacter">Edit</Link>
        <Link to="/teste">Teste</Link>
      </div>

      <div className={style.navbarSearch}>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <div className={style.navbarUser}>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </nav>
  );
}
