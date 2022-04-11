import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

import styles from "./Footer.module.scss";

export function Footer(props) {
  return (
    <footer className={`${styles["footer"]} ${styles["section"]}`}>
      <div className={`${styles["footer__container"]} ${styles["bd-grid"]}`}>
        <h1 className={`${styles["footer__title"]}`}>Eládio Tchiinhemba</h1>
        <p className={`${styles["footer__description"]}`}>
          Eu sou Eládio Tchiinhemba e este é o meu site pessoal, consulte-me
          aqui
        </p>

        <div className={`${styles["footer__social"]}`}>
          <a
            href="https://www.linkedin.com/in/tchiinhemba/"
            className={`${styles["footer__link"]}`}
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/tchiinhemba"
            className={`${styles["footer__link"]}`}
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://tchiinhemba.medium.com"
            className={`${styles["footer__link"]}`}
            target="_blank"
          >
            <BsMedium />
          </a>
        </div>

        <p className={`${styles["footer__copy"]}`}>
          Todos os direitos reservados por Eládio Tchiinhemba - {currentYear()}
        </p>
      </div>
    </footer>
  );
}

const currentYear = () => new Date().getFullYear();
