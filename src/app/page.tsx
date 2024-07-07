import Banner from "@/components/banner";
import styles from "./page.module.scss";
import Quote from "@/components/quote";
import Skills from "@/components/skills";

/**
 * Главная страница.
 */
export default function Page() {
  return (
    <div className={styles.Page}>
      <Banner />
      <Quote />
      <Skills />
    </div>
  );
}
