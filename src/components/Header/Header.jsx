import React, { useContext, useEffect, useState } from 'react';
import { WordContext } from '../Context';

const Header = () => {
    const context = useContext(WordContext);
    let theme = context.theme;
    const element = document.documentElement;
    const options = [
        { name: 'light', icon: 'sunny' },
        { name: 'dark', icon: 'moon' },
    ];

    const handleSetWord = (e) => {
        if (e.code === 'Enter') {
            if (e.target.value.length) {
                context.setKeyword(e.target.value.trim());
                e.target.value = '';
            } 
            else {
                context.setWord(null);
                context.setKeyword('');
            }
        }
    };

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;

            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;

            default:
                // localStorage.removeItem('theme');
                break;
        }
    }, [theme]);

    return (
        <header className="relative">
            <div className="flex justify-end my-4">
                <div className="w-fit rounded-lg bg-gray-100 dark:bg-zinc-500 mt-2 right-0">
                    {options.map((opt) => (
                        <button
                            key={opt.name}
                            onClick={() => context.setTheme(opt.name)}
                            className={`p-1 rounded text-xl ${
                                theme === opt.name && 'text-indigo-400'
                            }`}
                        >
                            <ion-icon name={opt.icon}></ion-icon>
                        </button>
                    ))}
                </div>
            </div>
            <div className="pb-8">
                <h1 className="uppercase font-semibold">
                    {context.keyword ? context.keyword : 'DICTIONARY'}
                </h1>
                <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">
                    {context.word && context.word.spelling}
                </span>
            </div>
            <div>
                <label
                    htmlFor="word-input"
                    className="block mb-2 text-sm font-medium"
                >
                    Search a word
                </label>
                <input
                    onKeyUp={handleSetWord}
                    id="word-input"
                    className="text-input"
                />
            </div>
        </header>
    );
};

export default Header;
