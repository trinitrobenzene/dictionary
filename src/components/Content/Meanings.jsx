import React, { useContext } from 'react';
import { WordContext } from '../Context';
import Skeleton from '../Skeleton';
import Fewer from './Fewer';

const Meanings = () => {
    const { word, setKeyword } = useContext(WordContext);

    if (word.title) {
        return (
            <>
                <h2 className="pb-4">{word.title}</h2>
                <p>{word.message}</p>
            </>
        );
    }

    return (
        <div>
            {word ? (
                <>
                    <audio controls src={word.audio} className="h-[32px]" ></audio>
                    {word.meanings.map((m, i) => (
                        <div key={i} className="my-6">
                            <h4 className="italic">{m.partOfSpeech}</h4>
                            <div className="md:pl-4 text-green-600 my-1">
                                {m.synonyms.length > 0 && (
                                    <>
                                        <span>Synonyms: </span>
                                        {m.synonyms.map((s, j) => (
                                            <span
                                                key={j}
                                                onClick={() => setKeyword(s)}
                                                className='s-style'
                                            >
                                                {j < m.synonyms.length - 1
                                                    ? `${s}, `
                                                    : s}
                                            </span>
                                        ))}
                                    </>
                                )}
                            </div>
                            <div className="md:pl-4 text-red-500 my-1">
                                {m.antonyms.length > 0 && (
                                    <>
                                        <span>Antonyms: </span>
                                        {m.antonyms.map((s, j) => (
                                            <span
                                                key={j}
                                                onClick={() => setKeyword(s)}
                                                className='a-style'
                                            >
                                                {j < m.antonyms.length - 1
                                                    ? `${s}, `
                                                    : s}
                                            </span>
                                        ))}
                                    </>
                                )}
                            </div>
                            <Fewer definitions={m.definitions} />
                        </div>
                    ))}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

const Loading = () => {
    return (
        <div>
            {
                <>
                    <div className="my-6">
                        <Skeleton classname="h-[32px] w-1/4" />
                        {Array(8)
                            .fill(0)
                            .map((i) => (
                                <Skeleton classname="h-[24px] my-2" />
                            ))}
                    </div>
                    <div className="my-6">
                        <Skeleton classname="h-[32px] w-1/4" />
                        {Array(8)
                            .fill(0)
                            .map((i) => (
                                <Skeleton classname="h-[24px] my-2" />
                            ))}
                    </div>
                </>
            }
        </div>
    );
};

Meanings.Loading = Loading;

export default Meanings;
