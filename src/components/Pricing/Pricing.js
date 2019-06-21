import React from 'react';
import './Pricing.css';
import PricingCard from './PricingCard/PricingCard';

const Pricing = () => {

    const pricings = [
        {
            plan: "basic",
            price: "00",
            isLimited: true,
            includes: [true, true, true, false, false]
        },
        {
            plan: "professional",
            price: "12",
            isLimited: true,
            includes: [true, true, true, true, false]
        },
        {
            plan: "business",
            price: "22",
            isLimited: true,
            includes: [true, true, true, true, true]
        }
    ];

    return (
        <div id="pricing">
            <h3 id="pricing-header">pricing plan</h3>
            <p id="pricing-subheader">Writers and stars of Veep have responded incredulously to the news an    Australian politician
            required preinstalled stitches way  email client, calendar, mapping program.</p>
            <div id="pricings">
                {
                    pricings.map((pricing, index) => <PricingCard plan={pricing.plan} price={pricing.price} isLimited={pricing.isLimited} includes={pricing.includes} key={index} /> )
                }
            </div>
        </div>
    );
}

export default Pricing;
