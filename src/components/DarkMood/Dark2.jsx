import React from "react";
import "./Dark2.css";
import { useState, useEffect } from "react";

const Dark2 = () => {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('light');
      }
      else {
        setTheme('dark');
      }
    }, [])
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
   


    <div>
       <label class="ui-switch">
  <input type="checkbox" onClick={handleThemeSwitch}/>
  <div class="slider">
    <div class="circle"></div>
  </div>
</label>

    </div>
  )
}

export default Dark2