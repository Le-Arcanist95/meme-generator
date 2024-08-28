import { useState, useEffect, useContext } from 'react';
import { fetchMemes } from './api';
import { Header } from './components/Header';
import { MemeGenerator } from './components/MemeGenerator';
import { SavedList } from './components/SavedList';
import { Footer } from './components/Footer';
import { ThemeContext } from './context/themeContext';

const App = () => {
    // Theme from Context
    const { theme } = useContext(ThemeContext);

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
        <div className={`${theme} wrapper`}>
            <Header />
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
            <Footer theme={theme} />
        </div>
    );
};

export default App;
