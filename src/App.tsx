import "@/assets/styles/index.scss";
import styles from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className={styles.wrapper}>
      <HomePage />
    </div>
  );
}

export default App;
