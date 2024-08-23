import { useState, useEffect } from 'react';
import { fetchMemes } from './api';

import { Header } from './components/Header';
import { MemeGenerator } from './components/MemeGenerator';
import { SavedList } from './components/SavedList';

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
    }, []);

    //  CRUD Functionality for Saved Memes
    //    POST - Save Meme
    const saveMeme = (data) => {
        setSavedMemeList((prev) => [...prev, data]);
    };
    //    PUT - Edit Meme
    const editMeme = (id, updatedData) => {
        setSavedMemeList((prev) =>
            prev.map((savedMeme) =>
                savedMeme.id === id ? { ...savedMeme, updatedData } : savedMeme
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
        <div className="wrapper">
            <Header />
            <MemeGenerator memes={memeList} saveMeme={saveMeme} />
            <SavedList
                functions={{ editMeme, deleteMeme }}
                savedMemes={savedMemeList}
            />
            {/* 
              Footer
                Social Links
                Accredidation 
                Copyright
            */}
        </div>
    );
};

export default App;
