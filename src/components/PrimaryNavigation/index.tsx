import styles from "./style.module.scss";

export default function PrimaryNavigation(): JSX.Element {
  return (
    <nav>
      <ul className={styles.list}>
        <li>MUSIC</li>
        <li>WORKS</li>
        <li>PROFILE</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
