import axios from "axios";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5";

const WEATHER_API_KEY = "a0202cb523406b47715ff38aa3f3b22c";

export const getWeather = async (lat: string, lon: string) => {
  try {
    const weather = await axios.get(
      `${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    return weather;
  } catch (e) {
    console.log(e);
  }
};

export const getWeatherForecast = async (lat: string, lon: string) => {
  try {
    const weather = await axios.get(
      `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    return weather;
  } catch (e) {
    console.log(e);
  }
};
