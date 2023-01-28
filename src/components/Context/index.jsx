import { createContext, useState } from 'react';

export const WordContext = createContext();

const WordProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const [word, setWord] = useState(null);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ?? 'light'
    );

    const value = {
        keyword,
        setKeyword,
        word,
        setWord,
        theme,
        setTheme,
    };

    return (
        <WordContext.Provider value={value}>{children}</WordContext.Provider>
    );
};

export default WordProvider;
