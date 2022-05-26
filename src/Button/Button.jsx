import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import style from "./Button.module.css";

function Button({ text, onClick }) {
  // useContext is used to consume AppContext
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
      <button 
     
      className={`${style.buttonBase} ${
        theme === "light" ? style.buttonLight : style.buttonDark
      }`}
    >
      {text}
    </button>
  );
}

export default Button;