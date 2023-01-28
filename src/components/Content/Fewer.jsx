import React, { useState } from 'react';

const Fewer = ({ definitions }) => {
    const [count, setCount] = useState(5);
    return (
        <div>
            <ol className="pl-8 list-decimal">
                {definitions.map(
                    (d, j) =>
                        j < count && (
                            <li key={j} className="pb-1">
                                <p>{d.definition}</p>
                                {d.example && (
                                    <span className="italic text-gray-500 text-sm dark:text-gray-400">
                                        Example: {d.example}
                                    </span>
                                )}
                            </li>
                        )
                )}
            </ol>
            <div className={definitions.length > 5 ? 'visible' : 'hidden'}>
                <span
                    onClick={() => setCount(count + 5)}
                    className={`btn ${
                        count < definitions.length ? 'visible flex items-center' : 'hidden'
                    }`}
                >
                    See More
                    <ion-icon name="chevron-down-outline" style={{fontSize:20}}></ion-icon>
                </span>
                <span
                    onClick={() => setCount(5)}
                    className={`btn ${
                        count < definitions.length ?  'hidden' : 'visible flex items-center'
                    }`}
                >
                    See Less
                    <ion-icon name="chevron-up-outline" style={{fontSize:20}}></ion-icon>
                </span>
            </div>
        </div>
    );
};

export default React.memo(Fewer);
