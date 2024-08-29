import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MemeContext } from '../context/MemeContext';
import { EditForm } from './EditForm';

export const ListItem = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const { deleteMeme } = useContext(MemeContext);

    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="item-container">
            <div className="item-display">
                <img src={data.url} className="meme-image" />
                <p className="top-text meme-text">{data.topText}</p>
                <p className="bottom-text meme-text">{data.bottomText}</p>
            </div>
            {isEditing ? (
                <EditForm data={data} toggleEditing={toggleEditing} />
            ) : (
                <div className="item-controls" id="item-">
                    <button
                        className={`${theme.value} item-delete button`}
                        onClick={() => deleteMeme(data.id)}
                    >
                        Delete
                    </button>
                    <button
                        className={`${theme.value} item-edit button`}
                        onClick={toggleEditing}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};
