import { ReactNode } from "react";
import Header from "components/Header";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
