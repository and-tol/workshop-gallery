import React, { useState } from 'react';

import './styles/init.css';

// Data
import images from './assets/data/images.json';

export const Gallery = () => {
    const [ imageId, setImageId ] = useState(images[ 0 ].id);

    const createImagesJSX = () => {
        const result = images.map((item) => {
            const { id, src } = item;

            return (
                <img
                    className = { id === imageId ? 'active' : '' }
                    data-id = { id }
                    key = { id }
                    src = { src }
                />
            );
        });

        return result;
    };

    const createImageJSX = () => {
        const result = images.find(({ id }) => id === imageId);
        const { id, author, src, public: price } = result;

        return (
            <>
                <div className = 'overlay'>
                    <ul>
                        <li>Идентификатор: {id}</li>
                        <li>Автор: {author}</li>
                        <li>Условия: {price ? 'Бесплатно' : '$10'}</li>
                    </ul>
                </div>
                <img src = { src } />
            </>
        );
    };

    const handleNextClick = () => {
        const idx = images.findIndex(({ id }) => id === imageId);
        const nextElement = images[ idx + 1 ];

        if (nextElement) {
            setImageId(nextElement.id);
        }
    };

    const handlePrevClick = () => {
        const idx = images.findIndex(({ id }) => id === imageId);
        const prevElement = images[ idx - 1 ];

        if (prevElement) {
            setImageId(prevElement.id);
        }
    };

    return (
        <>
            <h1 className = 'title'>Галерея</h1>
            <div className = 'gallery-wrapper'>
                <div className = 'gallery'>
                    <div>{ createImageJSX() }</div>
                </div>
                <div className = 'buttons-wrapper'>
                    <div className = 'buttons' >
                        <button onClick = { handlePrevClick }>Prev</button>
                        <button onClick = { handleNextClick }>Next</button>
                    </div>
                </div>
                <div className = 'images'>
                    { createImagesJSX() }
                </div>
            </div>
        </>
    );
};
