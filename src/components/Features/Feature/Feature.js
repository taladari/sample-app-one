import React from 'react';
import './Feature.css';

const Feature = ({ icon, header, text }) => {
    return (
        <div id="feature">
            <img src={icon} id="feature-icon" alt={header} />
            <div id="feature-content">
                <h4 id="feature-content-header">{header}</h4>
                <p id="feature-content-text">{text}</p>
            </div>
        </div>
    );
}

export default Feature;
