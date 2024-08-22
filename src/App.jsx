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
        fetchMemes.then((res) => setMemeList(res.memes));
    }, [memeList]);

    //  CRUD Functionality for Saved Memes
    //    PUT - Edit
    //    DELETE
    //    POST - Choice for user adding meme to imgflip for public use.

    const getMeme = () => {
        const randomIndex = Math.floor(Math.random() * memeList.length);
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
            <MemeGenerator memes={memeList} />

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
