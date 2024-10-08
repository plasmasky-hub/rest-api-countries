import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";

export interface ComponentBaseProps {
  darkMode: boolean;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function switchDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <section
      className={`font-nunito text-base text-blue-very-dark-text dark:text-white bg-white dark:bg-blue-very-dark-bg ${darkMode ? "dark" : "light"}`}
    >
      <Header onClick={switchDarkMode} darkMode={darkMode} />
      <div className="px-10 pt-24 mobile:px-6 mobile:pt-24 desktop:px-16 desktop:pt-32 flex justify-between items-center">
        <Search darkMode={darkMode} />
        <Filter darkMode={darkMode} />
      </div>
    </section>
  );
}

export default App;
