import React from 'react'
import './styles/Navbar.css';

function Navbar() {
    
    return (
        <header>
            <div id="nav-container">
                <h1 id="logo">EL</h1>
                <nav id="container">
                    <ul id="nav-ul">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#home-section">Resume</a></li>
                    </ul>      
    
                </nav>
            </div>
            

        </header>
        
    );
}
 

export default Navbar;