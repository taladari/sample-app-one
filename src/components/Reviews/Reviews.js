import React from 'react';
import './Reviews.css';

import firstImg from './firstImg.png';
import secondImg from './secondImg.png';

import Review from './Review/Review';

const Reviews = () => {

    const reviewsList = [
        {
            img: firstImg,
            name: "oliver gomez",
            prof: "web designer",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good."
        },
        {
            img: secondImg,
            name: "rita watson",
            prof: "web developer",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good."
        }
    ];

    return (
        <div id="reviews">
            <h3 id="reviews-header">what they say about us</h3>

            <div id="reviews-boxes">
                {
                    reviewsList.map((rev, index) => <Review reviewImg={rev.img} name={rev.name} prof={rev.prof} text={rev.text} /> )
                }
            </div>


            <div id="reviews-btns">
                <div className="review-btn"></div>
                <div id="review-btn-center" className="review-btn"></div>
                <div className="review-btn"></div>
            </div>
        </div>
    );
}

export default Reviews;
