import { useEffect, useState } from "react";
import {
  getWeather,
  getWeatherForecast,
} from "../pages/HomePage/api/getWeather";
import { LocationType } from "../App";
import { formatForecast } from "../utils/formatForecast";

export const useWeather = (location: LocationType) => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      if (location?.lat && location?.lon) {
        const result = await getWeather(location.lat, location.lon);
        const forecastResult = await getWeatherForecast(
          location.lat,
          location.lon
        );
        setWeather(result?.data);
        setForecast(formatForecast(forecastResult?.data));

        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return { weather, forecast, isLoading, isError };
};
