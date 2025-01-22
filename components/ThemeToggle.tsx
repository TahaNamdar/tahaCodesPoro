"use client";

import { useTheme } from "@/app/ThemeProvider";
import {IconSun,IconMoon} from "@tabler/icons-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full absolute top-2 left-2 z-50"
    >
      {theme === "light" ? <IconMoon/> : <IconSun/>}
    </button>
  );
};

export default ThemeToggle;
