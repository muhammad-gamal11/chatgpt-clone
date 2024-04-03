"use client";
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  cupcake: "cupcake",
  luxury: "luxury",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.cupcake);

  const toggleTheme = () => {
    const newTheme = theme === themes.cupcake ? themes.luxury : themes.cupcake;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme); // Update the theme state variable
  };

  return (
    <div onClick={toggleTheme} className="btn btn-outline btn-sm">
      {theme === "cupcake" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </div>
  );
};

export default ThemeToggle;
