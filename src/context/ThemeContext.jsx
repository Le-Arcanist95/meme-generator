import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        value: 'light',
        label: 'Light',
        icon: 'faSun',
    });

    const themeOptions = [
        { value: 'light', label: 'Light', icon: 'faSun' },
        { value: 'dark', label: 'Dark', icon: 'faMoon' },
        { value: 'fire', label: 'Fire', icon: 'faFire' },
        { value: 'ice', label: 'Ice', icon: 'faSnowflake' },
    ];

    const themeSelect = (themeVal) => {
        switch (themeVal) {
            case 'light':
                setTheme(themeOptions[0]);
                break;
            case 'dark':
                setTheme(themeOptions[1]);
                break;
            case 'fire':
                setTheme(themeOptions[2]);
                break;
            case 'ice':
                setTheme(themeOptions[3]);
                break;
            default:
                setTheme(themeOptions[0]);
                break;
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, themeOptions, themeSelect }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
