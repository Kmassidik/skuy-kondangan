import { useState } from "react";
import FirstPage from "./components/FirstPage";
import MainPage from "./components/MainPage";

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleButtonClick = () => {
    setShowMainPage(true);
  };

  return (
    <>
      {showMainPage ? (
        <section>
          <MainPage />
        </section>
      ) : (
        <section>
          <FirstPage onButtonClick={handleButtonClick} />
        </section>
      )}
    </>
  );
}
