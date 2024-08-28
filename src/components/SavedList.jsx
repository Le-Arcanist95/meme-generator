import { useContext } from 'react';
import { ListItem } from './ListItem';
import { MemeContext } from '../context/MemeContext';

export const SavedList = () => {
    const { savedMemeList } = useContext(MemeContext);

    const displayList = savedMemeList.map((savedMeme) => (
        <ListItem key={savedMeme.id} data={savedMeme} className="list-item" />
    ));

    return (
        <div className="list-container">
            <div className="list-display">{displayList}</div>
            <div className="list-navigation"></div>
        </div>
    );
};
