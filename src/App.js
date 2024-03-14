import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import React19Features from "./pages/React19Features";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  useEffect(() => {
    document.body.style.backgroundColor =
      themeMode === "light" ? "#fff" : "#ccc";
  }, [themeMode]);
  return (
    <ThemeProvider themeMode={themeMode}>
      <>
        <div>
          <button
            onClick={() =>
              setThemeMode((p) => (p === "light" ? "dark" : "light"))
            }
          >
            {`Toggle theme :${themeMode === "light" ? "Light" : "Dark"}`}
          </button>
        </div>

        <React19Features />
      </>
    </ThemeProvider>
  );
}

export default App;
