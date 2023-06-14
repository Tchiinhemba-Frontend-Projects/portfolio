import { Link } from "react-router-dom";
import styles from "./Thank.module.scss";

export function Thank(props) {
  return (
    <div className={styles["thank-body"]}>
      <div className={styles["thank__container"]}>
        <h1
          className={`${styles["section-title"]} ${styles["project__title"]}`}
        >
          Thank Youuuuuu!
        </h1>
        <p className={styles["project__description"]}>
          Your email has been sent successfully!
        </p>
        <Link
          to="/"
          className={`${styles["button"]} ${styles["button__light"]}`}
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
