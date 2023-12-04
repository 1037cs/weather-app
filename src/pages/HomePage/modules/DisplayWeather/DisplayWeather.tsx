import { FC, useContext } from "react";
import styles from "./DisplayWeather.module.scss";
import { TodayWeather } from "./components/TodayWeather";
import { Slider } from "./components/Slider";
import { useWeather } from "../../../../hooks/useWeather";
import { AppContext } from "../../../../App";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";

export const DisplayWeather: FC = () => {
  const context = useContext(AppContext);

  const { weather, forecast, isLoading } = useWeather(context?.location);

  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        {Object.keys(weather).length && !isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.content}
          >
            <TodayWeather weather={weather} />
            <Slider data={forecast} />
          </motion.div>
        ) : (
          <BeatLoader color="#696969" />
        )}
      </section>
    </div>
  );
};
