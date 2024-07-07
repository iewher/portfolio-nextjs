import { FaGithub, FaTelegram } from "react-icons/fa";
import styles from "./index.module.scss";

/**
 * Список media контента.
 */
export default function Media() {
  return (
    <div className={styles.Media}>
      <div className={styles.Line}></div>
      <div className={styles.Links}>
        <a href="https://github.com/iewher" target="_about">
          <FaGithub />
        </a>
        <a href="https://t.me/iewher" target="_about">
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}
