import React, { useContext } from 'react';
// import GrandChildCompo from "./GrandChildCompo";
import { ThemeContext } from "./Parentcomponent";



const ChildComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div> 
            <h1> Child Components </h1>
            <h2>
                Current Theme : {theme}
            </h2>  
            <button onClick={toggleTheme}> Toggle Theme </button>
            {/* <GrandChildCompo /> */}
        </div>
   
  )
}

export default ChildComponent