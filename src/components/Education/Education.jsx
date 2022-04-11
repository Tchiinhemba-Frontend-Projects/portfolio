import React from "react";

import styles from "./Education.module.scss";

export function Education(props) {
  const { year, institute, course } = props;
  return (
    <div className={styles["education__content"]}>
      <div>
        <h3 className={styles["education__year"]}>{year}</h3>
        <span className={styles["education__university"]}>{institute}</span>
      </div>

      <div className={styles["education__time"]}>
        <span className={styles["education__rounder"]}></span>
        <span className={styles["education__line"]}></span>
      </div>

      <div>
        <h3 className={styles["education__race"]}>Curso Ou Certificação</h3>
        <span className={styles["education__specialty"]}>{course}</span>
      </div>
    </div>
  );
}