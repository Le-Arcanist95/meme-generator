import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Select from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faSun, faFire } from '@fortawesome/free-solid-svg-icons';

export const ThemeSelector = () => {
    const { theme, themeOptions, themeSelect } = useContext(ThemeContext);

    const handleSelect = (e) => {
        themeSelect(e.value);
    };

    return (
        <Select
            value={theme}
            options={themeOptions}
            onChange={handleSelect}
            formatOptionLabel={(theme) => (
                <div className="theme-Option">
                    {theme.icon === 'faSun' && <FontAwesomeIcon icon={faSun} />}
                    {theme.icon === 'faMoon' && (
                        <FontAwesomeIcon icon={faMoon} />
                    )}
                    {theme.icon === 'faFire' && (
                        <FontAwesomeIcon icon={faFire} />
                    )}
                    {theme.icon === 'faSnowflake' && (
                        <FontAwesomeIcon icon={faSnowflake} />
                    )}

                    <span>{theme.label}</span>
                </div>
            )}
        />
    );
};
