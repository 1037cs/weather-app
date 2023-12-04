import { useEffect, useState } from "react";
import { getLocation } from "../pages/HomePage/api/getLocation";
import { LocationType } from "../App";

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await getLocation();
      setLocation({
        name: result.city,
        lat: result.latitude,
        lon: result.longitude,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { location, isLoading, isError };
};
