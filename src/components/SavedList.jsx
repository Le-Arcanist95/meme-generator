import { ListItem } from './ListItem';

export const SavedList = ({ savedMemes, functions }) => {
    const displayList = savedMemes.map((savedMeme) => (
        <ListItem key={savedMeme.id} data={savedMeme} functions={functions} />
    ));

    return <>{displayList}</>;
};
