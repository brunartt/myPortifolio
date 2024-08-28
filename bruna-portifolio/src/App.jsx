
import styles from "./App.module.css"
import { NavBar } from "./componets/Navbar/Navbar";
import { Hero } from "./componets/Hero/Hero";

function App() {
  return <div className={styles.App}>
    <NavBar />
    <Hero />
  
  </div>;
  
}

export default App
