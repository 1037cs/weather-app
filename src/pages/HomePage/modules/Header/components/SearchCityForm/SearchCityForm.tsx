import { FC, useEffect, useState } from "react";
import styles from "./SearchCityForm.module.scss";
import { Input } from "../../../../../../UI/Input";
import { useDebounce } from "../../../../../../hooks/useDebounce";
import { getCities } from "../../../../api/getCities";
import { AppContextType } from "../../../../../../App";
import { BeatLoader } from "react-spinners";

interface ISearchCityForm {
  context: AppContextType | null;
  onClose: () => void;
}

export const SearchCityForm: FC<ISearchCityForm> = ({ context, onClose }) => {
  const [searchCity, setSearchCity] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [cities, setCities] = useState([]);

  const debouncedSearchCity = useDebounce(searchCity, 700);

  const fetchCities = async () => {
    const results = await getCities(debouncedSearchCity);
    setCities(results.data.sort((a, b) => b.population - a.population));
  };

  useEffect(() => {
    if (debouncedSearchCity) {
      setIsSearching(true);
      fetchCities().then(() => {
        setIsSearching(false);
      });
    } else {
      setCities([]);
    }
  }, [debouncedSearchCity]);

  const onChangeHandler = (value: string) => {
    setSearchCity(value);
  };

  const setLocationHandler = (e) => {
    onClose();
    context?.setLocation({ name: e.city, lat: e.latitude, lon: e.longitude });
  };

  const Spinner = <BeatLoader color="#696969" size={5} />;

  return (
    <div className={styles.form}>
      <Input
        value={searchCity}
        onChange={onChangeHandler}
        loader={Spinner}
        isLoading={isSearching}
      />
      <div className={styles.cities}>
        {cities.length !== 0 &&
          cities.map((city) => (
            <div
              className={styles.cityCard}
              key={city.id}
              onClick={() => setLocationHandler(city)}
            >
              <p className={styles.city}>{city.city}</p>
              <p className={styles.country}>{city.country}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
