import { FC, ReactNode } from "react";
import styles from "./Popup.module.scss";
import { Portal } from "../Portal";

interface IPopup {
  children: ReactNode;
  onClose: () => void;
}

export const Popup: FC<IPopup> = ({ children, onClose }) => {
  const onCloseHandler = () => {
    onClose();
  };

  return (
    <Portal>
      <div className={styles.wrapper} onClick={onCloseHandler}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <header className={styles.header}>
            <h1 className={styles.title}>Choose a city</h1>
            <div className={styles.close} onClick={onCloseHandler} />
          </header>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </Portal>
  );
};
