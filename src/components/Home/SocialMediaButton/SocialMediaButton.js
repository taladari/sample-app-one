import React from 'react';
import './SocialMediaButton.css';

const SocialMediaButton = ({ btnImg, storeName }) => {
    return (
        <div id="social-btn">
            <img src={btnImg} alt={storeName} id="social-btn-img" />
            <p id="social-btn-text">Get it from <span>{storeName}</span></p>
        </div>
    );
}

export default SocialMediaButton;
