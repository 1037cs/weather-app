import { FC, useContext, useEffect } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Header } from "./modules/Header";
import { DisplayWeather } from "./modules/DisplayWeather";
import styles from "./HomePage.module.scss";
import { AppContext } from "../../App";
import { useGeolocation } from "../../hooks/useGeolocation";

const HomePage: FC = () => {
  const context = useContext(AppContext);
  const location = useGeolocation();

  useEffect(() => {
    !context?.location && context?.setLocation(location.location);
  }, [location.location, context]);

  return (
    <div className={styles.wrapper}>
      <MainLayout>
        <Header />
        <DisplayWeather />
      </MainLayout>
    </div>
  );
};

export default HomePage;
