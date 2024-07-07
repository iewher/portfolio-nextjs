import Banner from "@/components/banner";
import styles from "./page.module.scss";
import Quote from "@/components/quote";

export default function Page() {
  return (
    <div className={styles.Page}>
      <Banner />
      <Quote />
    </div>
  );
}
