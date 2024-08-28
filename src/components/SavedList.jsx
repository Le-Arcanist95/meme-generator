import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { ListItem } from './ListItem';

export const SavedList = ({ savedMemes, functions }) => {
    const { theme } = useContext(ThemeContext);

    const displayList = savedMemes.map((savedMeme) => (
        <ListItem
            key={savedMeme.id}
            theme={theme}
            data={savedMeme}
            functions={functions}
            className="list-item"
        />
    ));

    return (
        <div className="list-container">
            <div className="list-display">{displayList}</div>
            <div className="list-navigation"></div>
        </div>
    );
};
