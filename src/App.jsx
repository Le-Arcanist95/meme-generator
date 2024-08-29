import { useContext } from 'react';

import { MemeContextProvider } from './context/MemeContext';
import { ThemeContext } from './context/ThemeContext';

import { Header } from './components/Header';
import { MemeGenerator } from './components/MemeGenerator';
import { SavedList } from './components/SavedList';
import { Footer } from './components/Footer';

const App = () => {
    // Theme from Context
    const { theme } = useContext(ThemeContext);

    return (
        <MemeContextProvider>
            <div className={`${theme.value} wrapper`}>
                <Header />
                <div className="content-wrapper">
                    <MemeGenerator />
                    <SavedList />
                </div>
                <Footer />
            </div>
        </MemeContextProvider>
    );
};

export default App;
