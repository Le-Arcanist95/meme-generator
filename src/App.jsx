import { useState, useEffect } from 'react';
import { fetchMemes } from './api';

import { Header } from './components/Header';
import { MemeGenerator } from './components/MemeGenerator';

const App = () => {
    // State for Fetched Meme Array
    const [memeList, setMemeList] = useState([]);
    // State for Saved Meme Array
    const [savedMemeList, setSavedMemeList] = useState([]);

    // useEffect for axios GET request to "https://api.imgflip.com/get_memes"
    useEffect(() => {
        fetchMemes.then((res) => {
            setMemeList(res.memes.filter((memeObj) => memeObj.box_count === 2));
        });
    }, [memeList]);

    //  CRUD Functionality for Saved Memes
    //    POST - Save Meme
    const saveMeme = (data) => {
        setSavedMemeList((prev) => [...prev, data]);
    };
    //    PUT - Edit Meme
    const editMeme = (id, editData) => {
        savedMemeList.map((savedMeme) => {
            if (savedMeme.id === id) {
                return { ...savedMeme, editData };
            } else {
                return savedMeme;
            }
        });
    };
    //    DELETE - Delete Meme
    const deleteMeme = (id) => {
        savedMemeList.filter((savedMeme) => savedMeme.id !== id);
    };

    return (
        <>
            {/*
              Header
                Title
                Theme
                Signature
            */}
            <Header />

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
            <MemeGenerator memes={memeList} handleSubmit={saveMeme} />

            {/* 
              Saved List
                List Item
                  Edit
                  Delete
                  Optional: Upload
            */}
            {/* 
              Footer
                Social Links
                Accredidation 
                Copyright
            */}
        </>
    );
};

export default App;
