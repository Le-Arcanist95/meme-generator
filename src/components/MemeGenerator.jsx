import { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { v4 as uuidv4 } from 'uuid';

export const MemeGenerator = ({ memes, saveMeme }) => {
    const { theme } = useContext(ThemeContext);

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

    // Ternary to handle image display link
    const displayImg =
        currentMeme.url === '' ? 'https://placehold.co/500' : currentMeme.url;

    // Functions to handle State changes
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setInputFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setInputFields(initInputState);
    };

    const handleNewMeme = () => {
        const randomIndex = Math.floor(Math.random() * memes.length);
        const newMeme = memes[randomIndex];

        setCurrentMeme({ ...newMeme, id: uuidv4() });
        // setCurrentMeme((prev) => ({ ...prev, id: uuidv4() }));
        setInputFields(initInputState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        saveMeme({ ...currentMeme, ...inputFields });
        setCurrentMeme((prev) => ({ ...prev, id: uuidv4() }));
        setInputFields(initInputState);
    };

    return (
        <div className="generator-container">
            <div className="generator-display">
                <img src={displayImg} className="meme-image" />
                <button
                    className={`${theme} clear-button`}
                    onClick={handleClear}
                >
                    X
                </button>
                <p className="top-text meme-text">{inputFields.topText}</p>
                <p className="bottom-text meme-text">
                    {inputFields.bottomText}
                </p>
            </div>
            <div className="generator-controls">
                <button
                    className={`${theme} generator-refresh button`}
                    onClick={handleNewMeme}
                >
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
                    <button
                        className={`${theme} generator-submit button`}
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};
