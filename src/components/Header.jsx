import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const Header = (props) => {
    return (
        <header className={`heading flex-container ${props.theme}`}>
            <div className="flex-item">
                <h1 className="page-title">Another Meme Generator</h1>
            </div>
            <div className="flex-item">
                <button
                    className={`theme-toggleBtn ${props.theme}`}
                    onClick={() => {
                        props.theme === 'light'
                            ? props.functions.themeToggle('dark')
                            : props.functions.themeToggle('light');
                    }}
                >
                    {props.theme === 'light' ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon icon={faSun} />
                    )}
                </button>
            </div>
            <div className="flex-item">
                <h2 className="page-signature">Nix Arcane</h2>
            </div>
        </header>
    );
};
