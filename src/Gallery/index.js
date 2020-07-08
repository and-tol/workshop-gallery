import React from 'react';

import './styles/init.css';

// Data
import images from './assets/data/images.json';

export const Gallery = () => {
    const createImagesJSX = () => {
        const result = images.map((item) => {
            const { id, src } = item;

            return (
                <img
                    data-id = { id }
                    key = { id }
                    src = { src }
                />
            );
        });

        return result;
    };

    return (
        <>
            <h1 className = 'title'>Галерея</h1>
            <div className = 'gallery-wrapper'>
                <div className = 'gallery'>
                    <div>IMG</div>
                </div>
                <div className = 'buttons-wrapper'>
                    <div className = 'buttons' >
                        <button>Prev</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className = 'images'>
                    { createImagesJSX() }
                </div>
            </div>
        </>
    );
};
