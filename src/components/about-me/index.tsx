import PageLayout from "../page-layout";
import styles from "./index.module.scss";

export default function AboutMe() {
  return (
    <PageLayout title="about-me" id="about-me">
      <div className={styles.Container}>
        <div className={styles.Text}>
          Hello, I'm Georgiy! <br />
          <br /> I'm a self-taught front-end developer from Perm, Russia. I like
          to work on website development using various frameworks.
          <br />
          <br /> I love console utilities, similar to browsers.
        </div>
        <div className={styles.Image}>{/** FIXME: добавить фотографию */}</div>
      </div>
    </PageLayout>
  );
}
