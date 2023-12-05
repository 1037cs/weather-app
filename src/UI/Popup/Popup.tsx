import { FC, ReactNode } from "react";
import styles from "./Popup.module.scss";
import { Portal } from "../Portal";
import { motion } from "framer-motion";

interface IPopup {
  children: ReactNode;
  onClose: () => void;
  headerTitle?: string;
}

export const Popup: FC<IPopup> = ({ children, onClose, headerTitle }) => {
  const onCloseHandler = () => {
    onClose();
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.wrapper}
        onClick={onCloseHandler}
      >
        <motion.div
          className={styles.content}
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <header className={styles.header}>
            <h1 className={styles.title}>{headerTitle}</h1>
            <div className={styles.close} onClick={onCloseHandler} />
          </header>
          <main className={styles.main}>{children}</main>
        </motion.div>
      </motion.div>
    </Portal>
  );
};
