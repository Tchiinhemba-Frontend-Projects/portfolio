import React from "react";

import styles from "./WorksCard.module.scss";
import { AiOutlineLink } from "react-icons/ai";

export function WorksCard(props) {
  return (
    <div className={styles["works__img"]}>
      <img src="https://source.unsplash.com/random" alt="" />

      <div className={styles["works__data"]}>
        <a
          href="https://eladioclaudio.github.io/instagram_clone/"
          target="_blank"
          className={styles["works__link"]}
        >
          <AiOutlineLink />
        </a>
        <span className={styles["works__title"]}>Project 6</span>
      </div>
    </div>
  );
}
