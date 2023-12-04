import { FC } from "react";
import { useDateTime } from "../../../../../../hooks/useDateTime";

export const DataDisplay: FC = () => {
  const currentDateTime = useDateTime();

  return <div>{currentDateTime}</div>;
}

export default DataDisplay;
