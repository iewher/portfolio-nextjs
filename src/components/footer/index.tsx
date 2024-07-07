import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Rights}>
        © Copyright {new Date().getFullYear()}. Made by Georgy
      </div>
    </div>
  );
}
