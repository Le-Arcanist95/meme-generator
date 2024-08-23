import { useState } from 'react';

export const ListItem = ({ data, functions }) => {
    const { editMeme, deleteMeme } = functions;

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        topText: data.topText,
        bottomText: data.bottomText,
    });

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;

        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        editMeme(data.id, editData);
        toggleEditing();
    };

    console.log("listItemLoaded")

    return (
        <div className="saved-item">
            <img src={data.url} className="item-image" />
            <p className="item-topText">{data.topText}</p>
            <p className="item-bottomText">{data.bottomText}</p>
            {isEditing ? (
                <>
                    <form onSubmit={handleEditSubmit}>
                        <input
                            type="text"
                            name="topText"
                            value={editData.topText}
                            onChange={handleEditFormChange}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            value={editData.bottomText}
                            onChange={handleEditFormChange}
                        />
                        <button type="submit">Save Changes</button>
                    </form>
                </>
            ) : (
                <>
                    <button
                        className="delete-button"
                        onClick={() => deleteMeme(data.id)}
                    >
                        Delete
                    </button>
                    <button className="edit-button" onClick={toggleEditing}>
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};
