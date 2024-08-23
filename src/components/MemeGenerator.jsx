import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MemeGenerator = ({ memes, handleSubmit }) => {
    //  Initial input state for reset and clear
    const initInputState = {
        topText: '',
        bottomText: '',
    };

    //  State for access to current imageUrl and box_count
    const [currentMeme, setCurrentMeme] = useState({
        id: uuidv4(),
        name: '',
        url: '',
        height: 0,
        width: 0,
        box_count: 0,
    });
    //  Stateful tracking of form inputs
    const [inputFields, setInputFields] = useState({
        topText: '',
        bottomText: '',
    });

    // Functions to handle State changes
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setInputFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleClear = (e) => {
        setInputFields(initInputState);
    };

    const handleNewMeme = () => {
        const randomIndex = Math.floor(Math.random() * memes.length);
        const newMeme = memes[randomIndex];

        setCurrentMeme({ ...newMeme, id: uuidv4() });
        // setCurrentMeme((prev) => ({ ...prev, id: uuidv4() }));
        setInputFields(initInputState);
    };

    return (
        <div className="generator-container">
            <div className="meme-display">
                <img
                    src={
                        currentMeme.url === ''
                            ? 'https://placehold.co/750x750'
                            : currentMeme.url
                    }
                    className="meme-image"
                />
                <button className="clear-button" onClick={handleClear}>
                    X
                </button>
                <p className="top-text meme-text">{inputFields.topText}</p>
                <p className="bottom-text meme-text">
                    {inputFields.bottomText}
                </p>
            </div>
            <button className="refresh-button" onClick={handleNewMeme}>
                Refresh
            </button>
            <form className="input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={inputFields.topText}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={inputFields.bottomText}
                    onChange={handleFormChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
