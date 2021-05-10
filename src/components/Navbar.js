import React from 'react'
import './styles/Navbar.css';

function Navbar() {
    return (
        <header>
            <h1 id="logo">EL</h1>
            <nav id="container">
                <ul id="nav-ul">
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#skills-section">Skills</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    );
}


export default Navbar;