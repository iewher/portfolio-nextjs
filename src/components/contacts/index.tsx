import { FaTelegram, FaGithub } from "react-icons/fa";

import PageLayout from "../page-layout";
import styles from "./index.module.scss";

export default function Contacts() {
  return (
    <PageLayout title="contacts">
      <div className={styles.Container}>
        <div className={styles.Text}>
          Hello, I'm Georgiy! <br /> I'm a self-taught front-end developer from
          Perm, Russia. I like to work on website development using various
          frameworks. I love console utilities, similar to browsers.
        </div>
        <div className={styles.Contacts}>
          <div className={styles.Title}>Message me here</div>
          <a href="https://t.me/iewher" about="_blank">
            <FaTelegram />
            Telegram
          </a>
          <a href="https://github.com/iewher">
            <FaGithub />
            Github
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
