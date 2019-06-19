import React from 'react';
import './FeaturesList.css';

import design from './design.png';
import userfriendly from './userfriendly.png';
import cleancode from './cleancode.png';

import Feature from '../Feature/Feature';

const FeaturesList = () => {

    const features = [
        {
            icon: design,
            header: "creative design",
            text: "Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore."
        },
        {
            icon: userfriendly,
            header: "user friendly",
            text: "Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore."
        },
        {
            icon: cleancode,
            header: "clean codes",
            text: "Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore."
        }
    ];

    return (
        <div id="features-list">
            {
                features.map((feature, index) => <Feature icon={feature.icon} header={feature.header} text={feature.text} key={index} />)
            }
        </div>
    );
}

export default FeaturesList;
