import { FC, useEffect, useState } from "react";
import styles from "./LocationBlock.module.scss";
import { getLocation } from "../../../../api/getLocation";

export const LocationBlock: FC = () => {
  const [location, setLocation] = useState("Samara");

  useEffect(() => {
    getLocation().then((data) => setLocation(data.city));
  }, []);

  return <div className={styles.location}>{location}</div>;
};
