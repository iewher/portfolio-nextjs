import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.Text}>
        <p className={styles.Title}>
          Georgy is a <span>front-end delevoper</span>
        </p>
        <p className={styles.Description}>
          I build websites of any complexity and can do a little in the backend
        </p>
        <button className={styles.ContactButton}>Contact me!</button>
      </div>
      <div className={styles.Image}>{/** FIXME: добавить картинку */}</div>
    </div>
  );
}

export default Banner;
