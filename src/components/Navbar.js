import React from 'react'
import './styles/navbar.css';

function Navbar() {
    return (
        <nav id="container">
            <ul id="nav-ul">
                <li><a href="./index.js">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;