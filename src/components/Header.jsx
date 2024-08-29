import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeSelector } from './ThemeSelector';

export const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <header className={`heading flex-container ${theme.value}`}>
            <div className="flex-item">
                <h1 className="page-title">Another Meme Generator</h1>
                <h2 className="page-signature">by Nix Arcane</h2>
            </div>
            <div className="flex-item">
                <ThemeSelector />
            </div>
        </header>
    );
};
