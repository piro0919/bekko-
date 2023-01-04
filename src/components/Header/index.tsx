import Spacer from "react-spacer";
import styles from "./style.module.scss";
import PrimaryNavigation from "components/PrimaryNavigation";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1>Natsuzolab</h1>
        <Spacer grow={1} />
        <PrimaryNavigation />
      </div>
    </header>
  );
}
