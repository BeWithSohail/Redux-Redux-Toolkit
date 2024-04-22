import {react,useState,useContext, createContext} from "react"
import ChildComponent from "./ChildComponent";

export const ThemeContext = createContext();

const Parentcomponent = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return (prevTheme === "light" ? "dark" : "light");
        });    
    }

    return (
        <div> 
            <h1> Parent_component </h1>
            <button onClick={toggleTheme}> Toggle Theme </button>
            <ThemeContext.Provider value={{theme, toggleTheme }}> 
                    <ChildComponent />
            </ThemeContext.Provider>
        </div>
  )
}

export default Parentcomponent;