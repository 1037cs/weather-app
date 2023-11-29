import React, { FC } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Header } from "./modules/Header";
import { DisplayWeather } from "./modules/DisplayWeather";

const HomePage: FC = () => {
  return (
    <MainLayout>
      <Header />
      <DisplayWeather/>
    </MainLayout>
  );
};

export default HomePage;
