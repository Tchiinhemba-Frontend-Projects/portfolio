import React from "react";

import styles from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export function Header(props) {
  const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close");

  function show() {
    navMenu.classList.toggle("show");
    console.log("OK!");
  }

  function hidden() {
    navMenu.classList.remove("show");
  }

  return (
    <React.Fragment>
      <header className={styles["l-header"]}>
        <nav className={`${styles["nav"]} ${styles["bd-grid"]}`}>
          <div
            className={styles["nav__toggle"]}
            id="nav-toggle"
            onClick={() => show()}
          >
            <FiMenu />
          </div>

          <div>
            <a href="#" className={styles["nav__logo"]}>
              Eládio Tchiinhemba
            </a>
          </div>

          <div className={styles["nav__menu"]} id="nav-menu">
            <div className={styles["nav__close"]} id="nav-close">
              <GrClose />
            </div>

            <ul className={styles["nav__list"]}>
              <li className={styles["nav__item"]}>
                <a
                  href="#home"
                  className={`${styles["nav__link"]} ${styles["active"]}`}
                >
                  Home
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a href="#about" className={`${styles["nav__link"]}`}>
                  About
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a href="#skills" className={`${styles["nav__link"]}`}>
                  Skills
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a href="#services" className={`${styles["nav__link"]}`}>
                  Services
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a href="#works" className={`${styles["nav__link"]}`}>
                  Projects
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a href="#contact" className={`${styles["nav__link"]}`}>
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
