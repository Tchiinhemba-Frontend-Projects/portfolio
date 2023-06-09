import React from "react";

import styles from "./Skill.module.scss";

export function Skill(props) {
  const { xp, nameSkill } = props;

  return (
    <div className={styles["skills__data"]}>
      <span className={styles["skills__name"]}>{nameSkill}</span>
      <span className={styles["skills__number"]}>{`${xp} ${(xp > 1 ? 'years': 'year')}`}</span>
      <span
        className={`${styles["skills__bar"]}`}
        style={{ width: `${experience(xp)}%` }}
      ></span>
    </div>
  );
}

function experience(xp){
  let currentYear = new Date().getFullYear();
  let codeLifeTime = currentYear - 2014;

  return Math.floor((xp/codeLifeTime) * 100);
}