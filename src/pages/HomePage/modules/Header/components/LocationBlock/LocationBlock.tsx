import { FC, useContext } from "react";
import styles from "./LocationBlock.module.scss";
import { AppContext } from "../../../../../../App";

export const LocationBlock: FC = () => {
  const context = useContext(AppContext);

  return (
    <div className={styles.location}>
      {context?.location?.name ? context?.location?.name : "Determine your location..."}
    </div>
  );
};
