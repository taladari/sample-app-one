import React from 'react';
import './Home.css';

import phone from './Phone.png';
import appStore from './app-store.png';
import googlePlay from './play-store.png';

import SocialMediaButton from './SocialMediaButton/SocialMediaButton';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div id="home">

            <Navbar />

            <div id="home-content">

                <img id="phone-img" src={phone} />

                <div id="home-text">
                    <h2 id="home-text-header">sample app to increase <span>your productivity</span></h2>
                    <p id="home-text-text">A sample app which was not designed by me intented to show my developer skills</p>
                    <div id="media-btns">
                        <SocialMediaButton btnImg={appStore} storeName="App store" />
                        <SocialMediaButton btnImg={googlePlay} storeName="Google play" />
                    </div>
                </div>

            </div>
        
        </div>
    );
}

export default Home;
