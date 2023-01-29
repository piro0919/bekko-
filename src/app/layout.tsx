// eslint-disable-next-line filenames/match-exported
"use client";
// eslint-disable-next-line camelcase
import { Zen_Kaku_Gothic_New } from "@next/font/google";
import { ReactNode } from "react";
import "react-modern-drawer/dist/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "ress/dist/ress.min.css";
import "./globals.scss";
import "./mq-settings.scss";
import Layout from "components/Layout";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: "400",
});

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="ja">
      <head />
      <body className={zenKakuGothicNew.className}>
        <script />
        <ToastContainer position="bottom-center" theme="dark" />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
