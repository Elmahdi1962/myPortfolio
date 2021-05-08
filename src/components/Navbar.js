import React from 'react'
import './styles/Navbar.css';

function Navbar() {
    return (
        <nav id="container">
            <h1 id="logo">EL</h1>
            <ul id="nav-ul">
                <li><a href="./index.js">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;