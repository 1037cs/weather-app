import { FC } from "react";
import styles from "./TodayWeather.module.scss";
import wind from "@/assets/icons/wind.svg";
import humidity from "@/assets/icons/icon.svg";

interface ITodayWeather {
  weather: object;
}

export const TodayWeather: FC<ITodayWeather> = ({ weather }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.temperature}>{Math.round(weather.main.temp)}</div>
        <p className={styles.weather}>{weather.weather[0].main}</p>
      </div>

      <div className={styles.addictional}>
        <div className={styles.row}>
          <img className={styles.icon} src={wind} />
          <p className={styles.weather}>{weather.wind.speed} mph</p>
        </div>

        <div className={styles.row}>
          <img className={styles.icon} src={humidity} />
          <p className={styles.weather}>{weather.main.humidity} %</p>
        </div>
      </div>
    </section>
  );
};
