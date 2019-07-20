import React from 'react';

const Logo = () => {
    return (
        <div id="logo">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="620px" height="100px" xmlSpace="preserve">
                <defs>
                    <pattern id="pattern" width="1" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <rect x="0" y="0" width="1" height=".8" fill="#ffffff" />
                    </pattern>

                    <text id="text" x="310" y="70" fontFamily="'Oswald', sans-serif" fontSize="64" letterSpacing="15px" textAnchor="middle">THIS IS THE LOGO</text>

                    <mask id="mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                        <use x="-6" y="-6" stroke="#000" strokeWidth="5" xlinkHref="#text" opacity="1" fill="#000" />
                    </mask>
                </defs>

                <use x="6" y="6" xlinkHref="#text" opacity="1" fill="url(#pattern)" mask="url(#mask)" />
                <use x="0" y="0" xlinkHref="#text" fill="#fff" />
            </svg>
        </div>
    );
}

export default Logo;