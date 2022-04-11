import React from "react";
import styled from "styled-components";

import styles from "./Skill.module.scss";

export function Skill(props) {
  const { xp, nameSkill } = props;
  return (
    <div className={styles["skills__data"]}>
      <span className={styles["skills__name"]}>{nameSkill}</span>
      <span className={styles["skills__number"]}>{`${xp}%`}</span>
      <span className={`${styles["skills__bar"]}`} style={{ width: `${xp}%` }}></span>
    </div>
  );
}
