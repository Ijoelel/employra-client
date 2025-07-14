import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light");
    localStorage.theme = localStorage.theme || "light";

    const updateTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.theme = newTheme;
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        console.log("Current theme:", newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        updateTheme(newTheme);
    };

    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
