import { FC, ReactNode } from "react";
import styles from "./MainLayout.module.scss";
import { motion } from "framer-motion";

interface MainLayout {
  children: ReactNode;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.layout}
    >
      {children}
    </motion.div>
  );
};
