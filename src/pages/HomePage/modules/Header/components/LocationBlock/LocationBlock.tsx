import { FC, useContext, useState } from "react";
import styles from "./LocationBlock.module.scss";
import { AppContext } from "../../../../../../App";
import { Popup } from "../../../../../../UI/Popup";
import { SearchCityForm } from "../SearchCityForm";

export const LocationBlock: FC = () => {
  const context = useContext(AppContext);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const closePopup = () => {
    setIsShowPopup(false);
  };

  const openPopup = () => {
    setIsShowPopup(true);
  };

  return (
    <>
      <div className={styles.location} onClick={openPopup}>
        {context?.location?.name
          ? context?.location?.name
          : "Determine your location..."}
      </div>
      {isShowPopup && (
        <Popup onClose={closePopup}>
          <SearchCityForm context={context} onClose={closePopup}/>
        </Popup>
      )}
    </>
  );
};
