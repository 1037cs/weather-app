import { FC, ReactNode } from "react";
import styles from "./MainLayout.module.scss";

interface MainLayout {
  children: ReactNode;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
