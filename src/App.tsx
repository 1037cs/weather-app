import "@/assets/styles/index.scss";
import HomePage from "./pages/HomePage/HomePage";
import { createContext, useState } from "react";

export type LocationType = { name: string; lat: string; lon: string } | null;

export type AppContextType = {
  location: LocationType;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
};

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const [location, setLocation] = useState<LocationType>(null);

  return (
    <AppContext.Provider value={{ location, setLocation }}>
      <HomePage />;
    </AppContext.Provider>
  );
}

export default App;
