import { FC, useEffect, useState } from "react";
import styles from "./DataDisplay.module.scss";

export const DataDisplay: FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 60000); // Обновляем каждую минуту

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
    const year = now.getFullYear();

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }

  return <div>{currentDateTime}</div>;
};

export default DataDisplay;
