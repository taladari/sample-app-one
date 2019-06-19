import React from 'react';
import './Footer.css';

import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';

const Footer = () => {
    return (
        <div id="footer">
            <p id="footer-text">Copyright &copy; 2018 UIXREX(Design), Tal Adari(Code), All rights Reserved.</p>
            <div id="footer-icons">
                <img className="soc-icon" src={facebook} alt="facebook" />
                <img className="soc-icon" src={twitter} alt="twitter" />
                <img className="soc-icon" src={instagram} alt="instagram" />
                <img className="soc-icon" src={linkedin} alt="linkedin" />
            </div>
        </div>
    );
}

export default Footer;
