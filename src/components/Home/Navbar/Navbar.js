import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <h1 id="navbar-logo">sample</h1>
            <ul id="nav-links">
                <li className="nav-link">
                    <a href="#">Home</a>
                </li>
                <li className="nav-link">
                    <a href="#">About</a>
                </li>
                <li className="nav-link">
                    <a href="#">Features</a>
                </li>
                <li className="nav-link">
                    <a href="#">Pricing</a>
                </li>
                <li className="nav-link">
                    <a href="#">Reviews</a>
                </li>
                <li className="nav-link">
                    <a href="#">Contact</a>
                </li>
            </ul>

            <button id="try-btn">Try for free</button>

        </div>
    );
}

export default Navbar;
