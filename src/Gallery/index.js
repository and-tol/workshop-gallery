import React from 'react';

import './styles/init.css';

export const Gallery = () => {
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
                    IMAGES
                </div>
            </div>
        </>
    );
};
