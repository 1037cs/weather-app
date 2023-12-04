import { useEffect, useState } from "react";
import { getTime } from "@/utils/getTime";
import { getDate } from "@/utils/getDate";

const setDateAndTime = () => {
  const { day, month, year } = getDate();
  const { hours, minutes } = getTime();
  return `${day}.${month}.${year},  ${hours}:${minutes}`;
};

export const useDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(setDateAndTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(setDateAndTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return currentDateTime;
};
