import Image from "next/image";

import PageLayout from "../page-layout";
import squares from "../../../public/squares.svg";
import styles from "./index.module.scss";

interface CardProps {
  title: string;
  list: string[];
}

export default function Skills() {
  return (
    <PageLayout title="skills" id="skills">
      <div className={styles.Container}>
        <div className={styles.Img}>
          <Image src={squares} alt="Squares" />
        </div>
        <div className={styles.Columns}>
          <div className={styles.Column}>
            <Card
              title="Languages"
              list={["TypeScript", "JavaScript", "Golang"]}
            />
          </div>
          <div className={styles.Column}>
            <Card title="Databases" list={["PostgresQL"]} />
            <Card
              title="Other"
              list={["HTML", "SCSS", "Rest API", "Apollo Graphql"]}
            />
          </div>
          <div className={styles.Column}>
            <Card title="Tools" list={["Linux", "VSCode", "Git"]} />
            <Card
              title="Frameworks"
              list={["React", "NextJS", "Gin", "React Native"]}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function Card({ title, list }: CardProps) {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.List}>
        {list.map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </div>
  );
}
