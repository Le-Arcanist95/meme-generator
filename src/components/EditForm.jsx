import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MemeContext } from '../context/MemeContext';

export const EditForm = ({ data, toggleEditing }) => {
    const { theme } = useContext(ThemeContext);
    const { editMeme } = useContext(MemeContext);

    const [editData, setEditData] = useState({
        topText: data.topText,
        bottomText: data.bottomText,
    });

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
                className={`${theme.value} item-submit button`}
                type="submit"
            >
                Save Changes
            </button>
        </form>
    );
};
