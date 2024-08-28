import { ListItem } from './ListItem';

export const SavedList = ({ theme, savedMemes, functions }) => {
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
