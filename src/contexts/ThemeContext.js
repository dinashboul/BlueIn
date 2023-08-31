import React, { Children, createContext, useContext, useState } from 'react';
 const ThemeContext=createContext()

 export function useTheme (){
    return useContext(ThemeContext)
 }

 export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light'); // You can set the default theme here

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
        </ThemeContext.Provider>
    )
 }