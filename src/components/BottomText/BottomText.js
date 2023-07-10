import styles from "./BottomText.module.scss";

export default function BottomText() {
  return (
    <div className={styles.container}>
      <p>
        Hey there! I'm Van Huynh{" "}
        <i className={styles.highlight}>software engineer + designer hybrid</i>,{" "}
        serial first hire for startups, UPenn graduate, ex-Disney.
      </p>
      <p>
        I specialize in independently designing & building MVPs. Let's chat:{" "}
        <a className={styles.email} href="mailto:worksbyvan@gmail.com">
          worksbyvan@gmail.com
        </a>
      </p>
    </div>
  );
}
