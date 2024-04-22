import { createContext, useState } from "react";

const ThemeContext =createContext();

export const ThemeProvider = ({children})=>{

const [theme, setTheme] = useState("light");

const toggleTheme = () =>{
    setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
}

const themeValue = {
    theme,
    toggleTheme
}
    return(
        <ThemeContext.Provider value={themeValue} >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;