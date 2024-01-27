import "./global.scss";
import styles from "./App.module.scss";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {/* Sidebar */}
        <aside></aside>
        {/* Posts */}
        <main></main>
      </div>
    </div>
  );
}

export default App;
