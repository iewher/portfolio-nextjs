import Line from "../line";
import styles from "./index.module.scss";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className={styles.PageLayout}>
      <div className={styles.Title}>
        <span>#</span>
        {title} <Line />
      </div>
      {children}
    </div>
  );
}

export default PageLayout;
