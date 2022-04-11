import React from "react";

import styles from "./WorksCard.module.scss";
import { AiOutlineLink } from "react-icons/ai";

export function WorksCard(props) {

  const { title, link, bgPath } = props;
  return (
    <div className={styles["works__img"]}>
      <img src={bgPath} alt="" />

      <div className={styles["works__data"]}>
        <a
          href={link}
          target="_blank"
          className={styles["works__link"]}
        >
          <AiOutlineLink />
        </a>
        <span className={styles["works__title"]}>{title}</span>
      </div>
    </div>
  );
}
