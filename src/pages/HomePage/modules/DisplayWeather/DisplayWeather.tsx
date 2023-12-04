import { FC, useContext } from "react";
import styles from "./DisplayWeather.module.scss";
import { TodayWeather } from "./components/TodayWeather";
import { Slider } from "./components/Slider";
import { useWeather } from "../../../../hooks/useWeather";
import { AppContext } from "../../../../App";
import { BeatLoader } from "react-spinners";

export const DisplayWeather: FC = () => {
  const context = useContext(AppContext);

  const { weather, forecast } = useWeather(context?.location);

  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        {Object.keys(weather).length ? (
          <>
            <TodayWeather weather={weather} />
            <Slider data={forecast} />
          </>
        ) : (
          <BeatLoader color="#696969" />
        )}
      </section>
    </div>
  );
};
