import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>Georgy</div>
      <div className={styles.Links}>
        <Link url="skills" />
        <Link url="about-me" />
        <Link url="contacts" />
      </div>
    </div>
  );
}

function Link({ url }: { url: string }) {
  return (
    <a href={`#${url}`}>
      <span className={styles.Sharp}>#</span>
      {url}
    </a>
  );
}
