import { useEffect, useState } from 'react';
import { fetchMemes } from './api';

const App = () => {
    // State for Fetched Meme Array
    const [memeList, setMemeList] = useState([]);
    // State for Saved Meme Array
    const [savedMemeList, setSavedMemeList] = useState([]);

    // useEffect for axios GET request to "https://api.imgflip.com/get_memes"
    useEffect(() => {
        fetchMemes.then((res) => setMemeList(res.memes));
        console.log(memeList);
    }, []);

    //  CRUD Functionality for Saved Memes
    //    PUT - Edit
    //    DELETE
    //    POST - Choice for user adding meme to imgflip for public use.

    // // Testing Console Logs
    // console.log(memeList);
    // console.log(memeList[0]);
    // console.log(savedMemeList);
    // console.log(savedMemeList[0]);

    return (
        <div>
            {/*
              Header
                Title
                Theme
                Signature
            */}
            {/* 
              Meme Generator: Center of page unless displayed with Saved List or Mobile - Then on left side.
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
            {/* 
              Saved List: Conditionally rendered if user wishes to view - Then on right side
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
        </div>
    );
};

export default App;
