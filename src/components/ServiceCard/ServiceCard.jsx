import React from "react";

import styles from "./ServiceCard.module.scss";

export function ServiceCard(props) {
  const { icon } = props;
  return (
    <div className={styles["services__content"]}>
      <div className={`${styles['services__icon']}`}>{icon}</div>
      <h3 className={styles["services__title"]}>WordPress Development</h3>
      <p className={styles["services__description"]}>
        I'm new to the area, but I already have something to give. And I always
        try to do my best.
      </p>
    </div>
  );
}
