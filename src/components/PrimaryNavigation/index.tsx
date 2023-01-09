import { Poppins } from "@next/font/google";
import Link from "next/link";
import styles from "./style.module.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function PrimaryNavigation(): JSX.Element {
  return (
    <nav>
      <ul className={`${poppins.className} ${styles.list}`}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/discography">
            Discography
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/works">
            Works
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
