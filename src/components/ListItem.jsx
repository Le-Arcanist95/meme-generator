import { useContext, useState } from 'react';
import { ThemeContext } from '../context/themeContext';

export const ListItem = ({ data, functions }) => {
    const { theme } = useContext(ThemeContext);

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

    return (
        <div className="item-container">
            <div className="item-display">
                <img src={data.url} className="meme-image" />
                <p className="top-text meme-text">{data.topText}</p>
                <p className="bottom-text meme-text">{data.bottomText}</p>
            </div>
            {isEditing ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
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
                    <button
                        className={`${theme} item-submit button`}
                        type="submit"
                    >
                        Save Changes
                    </button>
                </form>
            ) : (
                <div className="item-controls" id="item-">
                    <button
                        className={`${theme} item-delete button`}
                        onClick={() => deleteMeme(data.id)}
                    >
                        Delete
                    </button>
                    <button
                        className={`${theme} item-edit button`}
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};
