import React, { FC } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Header } from "./modules/Header";

const HomePage: FC = () => {
  return (
    <MainLayout>
      <Header />
    </MainLayout>
  );
};

export default HomePage;
