import { useEffect, useState } from 'react';

export const MemeGenerator = ({ memes }) => {
    //  Initialize State for Resetting
    const initInputState = {
        topText: '',
        bottomText: '',
    };

    //  Loading boolean to prevent render errors from currentMeme loading
    const [isLoading, setIsLoading] = useState(false);
    //  State Object for access to current imageUrl and box_count
    const [currentMeme, setCurrentMeme] = useState({
        id: '',
        name: '',
        url: '',
    });
    //  Stateful tracking of form inputs
    const [inputFields, setInputFields] = useState({
        topText: '',
        bottomText: '',
    });

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
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setInputFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRefresh = (e) => {
        const randomIndex = Math.floor(Math.random() * memes.length);

        setCurrentMeme(memes[randomIndex]);
    };

    const handleClear = (e) => {
        setInputFields(initInputState);
    };

    return (
        <>
            {isLoading ? (
                <div>Loading</div>
            ) : (
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
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '45%',
                            margin: 'auto',
                        }}
                    >
                        <img
                            style={{
                                height: '50em',
                                width: '50em',
                            }}
                            src={currentMeme.url}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '25px',
                                left: '125px',
                            }}
                            onClick={handleRefresh}
                        >
                            Refresh
                        </button>
                        <button
                            style={{
                                position: 'absolute',
                                top: '25px',
                                right: '125px',
                            }}
                            onClick={handleClear}
                        >
                            X
                        </button>
                    </div>
                    <form>
                        <input
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                        />
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                        />
                    </form>
                </div>
            )}
        </>
    );
};
