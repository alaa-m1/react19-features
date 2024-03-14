import React, { use } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const UseHook = () => {
  const themeMode = use(ThemeContext);
  return (
    <>
      <div>useHook</div>
      Theme Mode: {themeMode}
    </>
  );
};

export default UseHook;
