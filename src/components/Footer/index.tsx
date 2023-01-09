import styles from "./style.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copyright}>&copy; 2015 Natsuzolab</span>
      </div>
    </footer>
  );
}
