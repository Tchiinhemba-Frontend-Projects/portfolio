import React, { useEffect, useRef, useState } from "react";

import styles from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export function Header(props) {
  const [toggle, setToggle] = useState("");
  const navMenu = useRef(null);

  function show() {
    if (navMenu.current.classList.contains(styles["show"])) {
      setToggle("");
    } else {
      setToggle(styles["show"]);
    }
  }

  function toggler() {
    return toggle;
  }

  const wrapperRef = useRef(null);

  return (
    <React.Fragment>
      <header className={styles["l-header"]}>
        <nav className={`${styles["nav"]} ${styles["bd-grid"]}`}>
          <div className={styles["nav__toggle"]} onClick={() => show()}>
            <FiMenu />
          </div>

          <div>
            <a href="#" className={styles["nav__logo"]}>
              Eládio Tchiinhemba
            </a>
          </div>

          <div
            className={
              toggler()
                ? `${styles["nav__menu"]} ${toggler()}`
                : `${styles["nav__menu"]}`
            }
            ref={navMenu}
          >
            <div className={styles["nav__close"]} onClick={() => show()}>
              <GrClose />
            </div>

            <ul className={styles["nav__list"]}>
              <li className={styles["nav__item"]}>
                <a
                  href="#home"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Início
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a
                  href="#about"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Sobre
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a
                  href="#skills"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Habilidades
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a
                  href="#services"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Serviços
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a
                  href="#works"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Projectos
                </a>
              </li>
              <li className={styles["nav__item"]}>
                <a
                  href="#contact"
                  className={`${styles["nav__link"]}`}
                  onClick={() => show()}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}
