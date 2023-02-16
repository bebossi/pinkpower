import style from "./style.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.barra}></div>
        <ul>
          <h2>Produced by</h2>
          <li>Bernardo Bossi</li>
          <li>Marco Antonio</li>
        </ul>
        <ul>
          <h2>Contact Us</h2>
          <Link
            className={style.link}
            to="https://www.linkedin.com/in/bernardo-bossi-87433a211/"
          >
            <li>Linkedin Bernardo</li>
          </Link>
          <Link
            className={style.link}
            to="https://www.linkedin.com/in/marco-antonio-oliveira-gon%C3%A7alves-314515123/"
          >
            <li>Linkedin Marco</li>
          </Link>
        </ul>
        <ul>
          <h2>Developed at Ironhack</h2>
          <li>Web Dev class 94</li>
          <li>Jan - Mar 2023</li>
        </ul>
      </footer>
    </>
  );
}
