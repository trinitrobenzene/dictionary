import React, { useContext, useEffect } from 'react';
import { WordContext } from '../Context';
import Meanings from './Meanings';
import './Content.css'

const Content = () => {
    const { word, keyword, setWord } = useContext(WordContext);

    const handleData = (data) => {
        if (data.length) {
            let meanings = [];
            let spelling = '';
            let audio = '';

            for (const word of data) {
                meanings = meanings.concat(word.meanings);

                if (spelling === '') {
                    if (word.phonetic) 
                        spelling = word.phonetic;
                    else {
                        const res = word.phonetics.find(p => p.text);
                        spelling = res ? res.text : "This word doesn't have phonetics"
                    }
                }

                if (audio.length === 0) {
                    if (word.phonetics.length) {
                        let result = word.phonetics.find((p) =>
                            p.audio.includes('dictionaryapi.dev')
                        );
                        audio = result ? result.audio : '';
                    }
                }
            }
            setWord({ meanings, spelling, audio });
        } else {
            setWord({
                title: 'No Definitions Found',
                message:
                    "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.",
            });
        }
    };

    useEffect(() => {
        keyword &&
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
                .then((resp) => resp.json())
                .then((data) => handleData(data));
    }, [keyword]);

    return (
        <div className="py-8">
            {word ? (
                <Meanings />
            ) : (
                <div className='relative'>
                    <h2 className='animation'>
                        Start by typing a word in the search box and press enter to
                        look up.
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Content;
