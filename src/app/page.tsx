import Banner from "@/components/banner";
import styles from "./page.module.scss";
import Skills from "@/components/skills";
import AboutMe from "@/components/aboutme";
import Contacts from "@/components/contacts";

/**
 * Главная страница.
 */
export default function Page() {
  return (
    <div className={styles.Page}>
      <Banner />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
