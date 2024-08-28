import { useState, useEffect, createContext } from 'react';
import { fetchMemes } from '../api';

const MemeContext = createContext();

const MemeContextProvider = ({ children }) => {
    // State for Fetched Meme Array
    const [memeList, setMemeList] = useState([]);
    // State for Saved Meme Array
    const [savedMemeList, setSavedMemeList] = useState([]);

    // Testing logs
    useEffect(() => {
        console.log(savedMemeList);
    }, [savedMemeList]);

    // useEffect for axios GET request to "https://api.imgflip.com/get_memes"
    useEffect(() => {
        fetchMemes.then((res) => {
            setMemeList(res.memes.filter((memeObj) => memeObj.box_count === 2));
        });
    }, []);

    useEffect(() => {
        console.log(memeList);
    }, [memeList]);
    useEffect(() => {
        console.log(savedMemeList);
    }, [savedMemeList]);

    //  CRUD Functionality for Saved Memes
    //    POST - Save Meme
    const saveMeme = (data) => {
        setSavedMemeList((prev) => [...prev, data]);
    };
    //    PUT - Edit Meme
    const editMeme = (id, updatedData) => {
        setSavedMemeList((prev) =>
            prev.map((savedMeme) =>
                savedMeme.id === id
                    ? { ...savedMeme, ...updatedData }
                    : savedMeme
            )
        );
    };
    //    DELETE - Delete Meme
    const deleteMeme = (id) => {
        setSavedMemeList((prev) =>
            prev.filter((savedMeme) => savedMeme.id !== id)
        );
    };

    return (
        <MemeContext.Provider
            value={{ memeList, savedMemeList, saveMeme, editMeme, deleteMeme }}
        >
            {children}
        </MemeContext.Provider>
    );
};

export { MemeContext, MemeContextProvider };
