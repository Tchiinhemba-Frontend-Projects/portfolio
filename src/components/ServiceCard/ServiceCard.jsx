import React from "react";

import styles from "./ServiceCard.module.scss";

export function ServiceCard(props) {
  const { icon, title, description } = props;
  return (
    <div className={styles["services__content"]}>
      <div className={`${styles['services__icon']}`}>{icon}</div>
      <h3 className={styles["services__title"]}>{ title }</h3>
      <p className={styles["services__description"]}>{description}</p>
    </div>
  );
}
