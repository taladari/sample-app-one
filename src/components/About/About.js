import React from 'react';
import './About.css';
import AboutCardsList from './AboutCardsList/AboutCardsList';

const About = () => {
    return (
        <div id="about">
            <h3 id="about-header">about the app</h3>
            <p id="about-text">This is where you write some sentences about your app which will let users know what is it actually doing</p>
            <AboutCardsList />
        </div>
    );
}

export default About;
