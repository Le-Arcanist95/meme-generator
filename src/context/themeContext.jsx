import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const themeSelect = (themeVal) => {
        switch (themeVal) {
            case 'light':
                setTheme('light');
                break;
            case 'dark':
                setTheme('dark');
                break;
            default:
                setTheme('light');
                break;
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, themeSelect }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
