import { createContext } from "react";

export type ThemeContextType = {
    theme: string;
    updateTheme: (newTheme: string) => void;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
