import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const { theme, themeSelect } = useContext(ThemeContext);

    return (
        <header className={`heading flex-container ${theme}`}>
            <div className="flex-item">
                <h1 className="page-title">Another Meme Generator</h1>
            </div>
            <div className="flex-item">
                <button
                    className={`theme-toggleBtn ${theme}`}
                    onClick={() => {
                        theme === 'light'
                            ? themeSelect('dark')
                            : themeSelect('light');
                    }}
                >
                    {theme === 'light' ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon icon={faSun} />
                    )}
                </button>
            </div>
            <div className="flex-item">
                <h2 className="page-signature">by Nix Arcane</h2>
            </div>
        </header>
    );
};
