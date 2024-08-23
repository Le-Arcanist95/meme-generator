import { useState } from 'react';

export const ListItem = ({
    id,
    url,
    height,
    width,
    topText,
    bottomText,
    deleteMeme,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        topText: '',
        bottomText: '',
    });

    return (
        <div className="saved-item">
            <img src={url} className="item-image" />
            <p className="top-text meme-text">{topText}</p>
            <p className="bottom-text meme-text">{bottomText}</p>
            <button className="delete-button" onClick={deleteMeme}>
                Delete
            </button>
            <button className="edit-button" onClick={editMeme}>
                Edit
            </button>
        </div>
    );
};
