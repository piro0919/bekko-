import ReactModernDrawer from "react-modern-drawer";
import styles from "./style.module.scss";

export type DrawerProps = {
  onClose: () => void;
  open: boolean;
};

export default function Drawer({ onClose, open }: DrawerProps): JSX.Element {
  return (
    <ReactModernDrawer
      className={styles.drawer}
      direction="left"
      onClose={onClose}
      open={open}
    >
      <div>Hello World</div>
    </ReactModernDrawer>
  );
}
