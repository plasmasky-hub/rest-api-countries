import { useState } from "react";
import "./App.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  function switchDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <section className={`font-nunito ${darkMode ? "dark" : "light"}`}>
      <header className=" fixed bg-white dark:bg-blue-dark">
        <a>Where in the world?</a>
        <button onClick={switchDarkMode}>
          {darkMode ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}Dark Mode
        </button>
      </header>
      <h1 className=" font-medium mobile:font-light desktop:font-bold">
        Vite + React
      </h1>
      <div className="card dark:bg-blue-very-dark-bg">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  );
}

export default App;
