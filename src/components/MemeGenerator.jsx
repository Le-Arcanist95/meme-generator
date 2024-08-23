import { useEffect, useState } from 'react';

export const MemeGenerator = ({ memes }) => {
    //  Initial input state for reset and clear
    const initInputState = {
        topText: '',
        bottomText: '',
    };

    //  State for access to current imageUrl and box_count
    const [currentMeme, setCurrentMeme] = useState({
        id: '',
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
    // State for scalable font size
    const [fontSizing, setFontSizing] = useState({
        fontSize: '78px',
    });

    useEffect(() => {
        console.log(currentMeme);
    }, [currentMeme]);
    //  useEffect to initialize component mount
    // useEffect(() => {
    //     //  Handling for loading variable and component
    //     if (currentMeme === undefined) {
    //         setIsLoading(true);
    //     } else if (Object.keys(currentMeme).length > 0) {
    //         setIsLoading(false);
    //     }

    //     console.log(currentMeme);
    //     console.log(isLoading);
    // }, [currentMeme, memes, isLoading]);

    // Functions to handle State changes

    // Function for checking if content is overflown
    const isOverflown = ({
        clientWidth,
        clientHeight,
        scrollWidth,
        scrollHeight,
    }) => {
        return scrollHeight > clientHeight || scrollWidth > clientWidth;
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setInputFields((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (isOverflown()) {
            setFontSizing
        }
    };

    const handleClear = (e) => {
        setInputFields(initInputState);
    };

    const handleNewMeme = () => {
        const randomIndex = Math.floor(Math.random() * memes.length);

        setCurrentMeme(memes[randomIndex]);
        setInputFields(initInputState);
    };

    return (
        <div>
            {/* 
                        Meme Generator
                            Image Display
                            Refresh
                            Clear
                        Creation Form
                            Top/Bottom Inputs
                            Submit
                        Optional:
                            Text Position Sliders
                            Additional Input Layouts
                    */}
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
                <p className="top-text meme-text" style={fontSizing}>
                    {inputFields.topText}
                </p>
                <p className="bottom-text meme-text" style={fontSizing}>
                    {inputFields.bottomText}
                </p>
            </div>
            <button className="refresh-button" onClick={handleNewMeme}>
                Refresh
            </button>
            <form className="input-form">
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
                <button>Save</button>
            </form>
        </div>
    );
};
