import { FC } from "react";
import styles from "./Header.module.scss";
import { LocationBlock } from "./components/LocationBlock";
import { DataDisplay } from "./components/DataDisplay";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <LocationBlock />
      <DataDisplay />
    </header>
  );
};
