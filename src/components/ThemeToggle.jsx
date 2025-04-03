import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("👀 Theme is:", isDarkMode ? "dark" : "light");
  
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("💡 Current <html> classes:", root.className);
  }, [isDarkMode]);
  

  return (
    <div className="flex items-center space-x-2">
      {/* Sun Icon */}
      <Sun className="w-4 h-4 text-yellow-500" />

      {/* Toggle Switch */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`w-10 h-6 flex items-center rounded-full px-1 transition-colors duration-300
          ${isDarkMode ? "bg-green-400" : "bg-gray-300"}`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${isDarkMode ? "translate-x-4" : "translate-x-0"}`}
        />
      </button>

      {/* Moon Icon */}
      <Moon className="w-4 h-4 text-gray-600 dark:text-white" />
    </div>
  );
};

export default ThemeToggle;
