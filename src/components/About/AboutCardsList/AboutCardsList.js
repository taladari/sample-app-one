import React from 'react';
import './AboutCardsList.css';

import download from './download.svg';
import data from './data.svg';
import support from './support.svg';

import AboutCard from '../AboutCard/AboutCard';

const AboutCardsList = () => {

    const cards = [
        {
            img: download,
            header: "easy download",
            text: "Apps that are not preinstalled usually available through distribution platforms called app stores"
        },
        {
            img: data,
            header: "data privacy",
            text: "Apps that are not preinstalled usually available through distribution platforms called app stores"
        },
        {
            img: support,
            header: "24/7 support",
            text: "Apps that are not preinstalled usually available through distribution platforms called app stores"
        }
    ];

    return (
        <div id="about-cards-list">
            { 
                cards.map((card, index) => <AboutCard key={index} cardImg={card.img} cardHeader={card.header} cardText={card.text} />) 
            }
        </div>
    );
}

export default AboutCardsList;
