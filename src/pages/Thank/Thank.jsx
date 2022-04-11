
import { Link } from 'react-router-dom';
import styles from './Thank.module.scss';


export function Thank(props) {
  return (
    <div className={styles["thank-body"]}>
      <div className={styles["thank__container"]}>
        <h1 className={`${styles["section-title"]} ${styles["project__title"]}`}>Obrigadooooo!</h1>
        <p className={styles["project__description"]}>
        Seu email foi enviado com SUCESSO!
        </p>
        <Link to="/" className={`${styles["button"]} ${styles["button__light"]}`}>
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
