import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h3 id="contact-header">contact us</h3>
            <p id="contact-subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua</p>
            <div id="contact-content">
                <div id="contact-content-info">
                    <div className="contact-content-info-box">
                        <h5 className="contact-info-header">location</h5>
                        <p className="contact-info-text">tel aviv, israel</p>
                    </div>
                    <div className="contact-content-info-box">
                        <h5 className="contact-info-header">telephone</h5>
                        <p className="contact-info-text">+972546206555</p>
                    </div>
                    <div className="contact-content-info-box">
                        <h5 className="contact-info-header">email</h5>
                        <p id="contact-content-email" className="contact-info-text">myemail@gmail.com</p>
                    </div>                    
                </div>
                <form id="contact-content-form">
                    <input className="form-input" type="text" id="name" name="name" placeholder="Name" />
                    <input className="form-input" type="email" id="email" name="email" placeholder="Email" />
                    <textarea className="form-input" id="msg" name="msg" placeholder="Your Message" />
                    <input type="submit" id="contact-btn" value="Send Message"></input>
                </form>
            </div>

        </div>
    );
}

export default Contact;
