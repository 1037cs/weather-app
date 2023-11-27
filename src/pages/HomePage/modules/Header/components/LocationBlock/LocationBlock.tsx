import { FC, useEffect, useState } from "react";
import styles from "./LocationBlock.module.scss";
import axios from "axios";

export const LocationBlock: FC = () => {
  const [location, setLocation] = useState('a');

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setLocation(location.data.city)
  };

  return <div className={styles.location}>{location}</div>;
};
