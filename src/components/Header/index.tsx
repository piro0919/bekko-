import Spacer from "react-spacer";
import styles from "./style.module.scss";
import PrimaryNavigation from "components/PrimaryNavigation";
import { Comfortaa } from "@next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={comfortaa.className}>Natsuzolab</h1>
        <Spacer grow={1} />
        <PrimaryNavigation />
      </div>
    </header>
  );
}
