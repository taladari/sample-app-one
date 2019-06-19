import React from 'react';
import './Features.css';

import phone from './phone2.png';
import FeaturesList from './FeaturesList/FeaturesList';

const Features = () => {
    return (
        <div id="features">
            <h3 id="features-header">features</h3>
            <p id="features-subheader">Writers and stars of Veep have responded incredulously to the news an        Australian politician
                required preinstalled stitches way  email client, calendar, mapping program.</p>
            <div id="features-content">
                <img src={phone} id="features-phone" alt="phone" />
                <FeaturesList />
            </div>
        </div>
    );
}

export default Features;
