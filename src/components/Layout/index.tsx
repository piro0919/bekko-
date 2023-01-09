"use client";
import NoSSR from "@mpth/react-no-ssr";
import noScroll from "no-scroll";
import { ReactNode, useEffect } from "react";
import { useBoolean, useElementSize } from "usehooks-ts";
import styles from "./style.module.scss";
import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [footerRef, { height }] = useElementSize();
  const {
    setFalse: offIsOpen,
    setTrue: onIsOpen,
    value: isOpen,
  } = useBoolean(false);

  useEffect(() => {
    if (isOpen) {
      noScroll.on();

      return;
    }

    noScroll.off();
  }, [isOpen]);

  return (
    <>
      <div
        className={styles.topWrapper}
        style={{ minHeight: `calc(100dvh - ${height}px)` }}
      >
        <div className={styles.headerWrapper}>
          <Header onOpen={onIsOpen} />
        </div>
        <main>{children}</main>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <NoSSR>
        <Drawer onClose={offIsOpen} open={isOpen} />
      </NoSSR>
    </>
  );
}
