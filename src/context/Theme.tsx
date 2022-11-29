import React, {createContext, ReactNode, useState} from 'react';

export type AppTheme = "dark" | "light";

interface ThemeProviderProps {
    children: ReactNode;
}

export interface ThemeContextType {
    theme: AppTheme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<AppTheme>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return <ThemeContext.Provider value={{
        theme,
        toggleTheme
    }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;