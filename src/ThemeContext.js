import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setDarkMode(storedTheme === "dark");
        } else {
            setDarkMode(
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-bs-theme",
            darkMode ? "dark" : "light"
        );
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
