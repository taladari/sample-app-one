import React from 'react';
import './Review.css';

const Review = ({ reviewImg, name, prof, text }) => {
    return (
        <div id="review">
            <img src={reviewImg} id="revImg" alt="avatar" />
            <h4 id="review-name">{name}</h4>
            <h5 id="review-prof">{prof}</h5>
            <p id="review-text">{text}</p>
        </div>
    );
}

export default Review;
