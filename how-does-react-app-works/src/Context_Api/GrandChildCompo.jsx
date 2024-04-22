import { react, useState, useContext, createContext } from "react";
import { ThemeContext } from "./Parentcomponent";

const GrandChildCompo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
      <div>
          <h1>
                 GrandChildCompo
          </h1>    

          <h2>Current theme: {theme}</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
  )
}

export default GrandChildCompo