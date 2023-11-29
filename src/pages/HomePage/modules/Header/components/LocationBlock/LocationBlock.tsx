import { FC } from "react";
import styles from "./LocationBlock.module.scss";
import { useGeolocation } from "../../../../../../hooks/useGeolocation";

export const LocationBlock: FC = () => {
  const location = useGeolocation();

  return <div className={styles.location}>{location}</div>;
};
