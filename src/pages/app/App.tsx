import "@/assets/styles/index.scss";
import { WeatherDisplay } from "../../modules/WeatherDisplay";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <WeatherDisplay></WeatherDisplay>
    </div>
  );
}

export default App;
