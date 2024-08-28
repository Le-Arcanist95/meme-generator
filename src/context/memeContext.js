import { useState, useEffect, createContext } from 'react';

const memeContext = createContext()

const memeContextProvider = ({ children }) => {
    return (
        <memeContext.Provider value={}>
            {children}
        </memeContext.Provider>
    )
}