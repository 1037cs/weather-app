export type forecastType = {
  date: string;
  weatherType: string;
  temperature: number;
  day: string;
};

export const formatForecast = (data: object) => {
  const weatherDataAtNoon: forecastType[] = [];

  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    const time = entry.dt_txt.split(" ")[1];

    if (time === "12:00:00") {
      const dateObj = new Date(date);
      const dayOfWeek = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
      });

      weatherDataAtNoon.push({
        date: date,
        weatherType: entry.weather[0].main,
        temperature: +Math.ceil(entry.main.temp),
        day: dayOfWeek,
      });
    }
  });

  return weatherDataAtNoon;
};
