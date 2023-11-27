import { FC, useEffect, useState } from "react";
import { getDate } from "../../../../../../utils/getDate";
import { getTime } from "../../../../../../utils/getTime";

const setDateAndTime = () => {
  const { day, month, year } = getDate();
  const { hours, minutes } = getTime();
  return `${day}.${month}.${year},  ${hours}:${minutes}`;
};

export const DataDisplay: FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(setDateAndTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(setDateAndTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentDateTime}</div>;
};

export default DataDisplay;
