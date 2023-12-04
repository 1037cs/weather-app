import { FC } from "react";
import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import useMobile from "../../../../../../hooks/useMobile";
import { forecastType } from "../../../../../../utils/formatForecast";

import "swiper/scss";

interface ISlider {
  data: forecastType[];
}

export const Slider: FC<ISlider> = ({ data }) => {
  const isMobile = useMobile(743);
  console.log(data);

  return (
    <section className={styles.wrapper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={isMobile ? 3 : 4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((day) => (
          <SwiperSlide key={day.date}>
            <div className={styles.slide}>
              <p className={styles.title}>{day.day}</p>
              <div className={styles.temperature}>{day.temperature}°</div>
              <p className={styles.weather}>{day.weatherType}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
