import React, { createContext } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ themeMode, children }) => {
  return (
    <ThemeContext.Provider value={themeMode}>{children}</ThemeContext.Provider>
  );
};
