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
       <Link to="/" ><a>Pink Power</a></Link> 
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
       <Link to="/create" ><a href="#">Create</a></Link> 
       <Link to="/editCharacter" ><a href="#">Edit</a></Link> 
        <Link to="/teste" ><a href="#">Teste</a></Link>
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
