import React from 'react'
import './styles/Navbar.css';

function Navbar() {
    return (
        <div id="container">
            <ul id="nav-ul">
                <li><a href="./index.js">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}


export default Navbar;