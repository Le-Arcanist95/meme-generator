import { useState, useEffect } from 'react';
import { fetchMemes } from './api';

import { Header } from './components/Header';
import { MemeGenerator } from './components/MemeGenerator';
import { SavedList } from './components/SavedList';
import { Footer } from './components/Footer';

const App = () => {
    // State for Fetched Meme Array
    const [memeList, setMemeList] = useState([]);
    // State for Saved Meme Array
    const [savedMemeList, setSavedMemeList] = useState([]);
    // State for Theme Context
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        console.log(savedMemeList);
    }, [savedMemeList]);

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

    const themeToggle = (themeVal) => {
        switch (themeVal) {
            case 'light':
                setTheme('light');
                break;
            case 'dark':
                setTheme('dark');
                break;
            default:
                setTheme('light');
                break;
        }
    };

    return (
        <div className={`${theme} wrapper`}>
            <Header functions={{ themeToggle }} theme={theme} />
            <div className="content-wrapper">
                <MemeGenerator
                    theme={theme}
                    memes={memeList}
                    saveMeme={saveMeme}
                />
                <SavedList
                    theme={theme}
                    functions={{ editMeme, deleteMeme }}
                    savedMemes={savedMemeList}
                />
            </div>
            {/* 
              Footer
                Social Links
                Accredidation 
                Copyright
            */}
            <Footer theme={theme} />
        </div>
    );
};

export default App;
