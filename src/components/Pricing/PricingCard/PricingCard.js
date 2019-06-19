import React from 'react';
import './PricingCard.css';

import check from './check.svg';
import close from './close.svg';

const PricingCard = ({ plan, price, isLimited, includes}) => {

    return (
        <div id="pricing-card">
            <h4 id="pricing-card-plan">{plan}</h4>
            <p id="pricing-card-price">${price}</p>
            <p id="pricing-card-access">{ isLimited ? "limited access" : "unlimited Access"}</p>
            <div id="pricing-card-services">
                <p className="pricing-card-service"> { includes[0] ? <img src={check} className={check} /> : <img src={close} className="close" /> } 100 MB Disk Space</p>
                <p className="pricing-card-service"> { includes[1] ? <img src={check} className={check} /> : <img src={close} className="close" /> } 2 Subdo mains</p>
                <p className="pricing-card-service"> { includes[2] ? <img src={check} className={check} /> : <img src={close} className="close" /> } 5 Email Accounts</p>
                <p className="pricing-card-service"> { includes[3] ? <img src={check} className={check} /> : <img src={close} className="close" /> } No License</p>
                <p className="pricing-card-service"> { includes[4] ? <img src={check} className={check} /> : <img src={close} className="close" /> } Phone &amp; Mail Support</p>
            </div>
            <button id="pricing-card-btn">purchase</button>
        </div>
    );
}

export default PricingCard;
