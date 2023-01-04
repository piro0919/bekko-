// eslint-disable-next-line filenames/match-exported, camelcase
import { Zen_Kaku_Gothic_New } from "@next/font/google";
import { ReactNode } from "react";
import "ress/dist/ress.min.css";
import "./globals.scss";
import Layout from "components/Layout";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({ weight: "400" });

export type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <head />
      <body className={zenKakuGothicNew.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
