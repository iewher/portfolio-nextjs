import Line from "../line";
import styles from "./index.module.scss";

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

function PageLayout({ title, children, ...otherProps }: PageLayoutProps) {
  return (
    <div className={styles.PageLayout} {...otherProps}>
      <div className={styles.Title}>
        <span>#</span>
        {title} <Line />
      </div>
      {children}
    </div>
  );
}

export default PageLayout;
