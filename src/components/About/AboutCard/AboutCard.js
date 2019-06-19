import React from 'react';
import './AboutCard.css';

const AboutCard = ({ cardImg, cardHeader, cardText }) => {
    return (
        <div id="about-card">
            <img src={cardImg} />
            <h3 id="about-card-header">{cardHeader}</h3>
            <p id="about-card-text">{cardText}</p>
        </div>
    );
}

export default AboutCard;
