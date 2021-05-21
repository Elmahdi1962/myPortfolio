import React from 'react'
import './styles/Navbar.css';
import Contact from './Contact';
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        document.getElementById("contact-a").addEventListener("onclick", function() {

            if(document.getElementById("contact-popup").style.height=="40px"){

                
                document.getElementById("contact-popup").style.height = "0px";
                console.log(document.getElementById("contact-popup").style.height);
                
            }else{
                
                document.getElementById("contact-popup").style.height = "40px";
                console.log(document.getElementById("contact-popup").style.height);
                
            }
          });
      }, []);
    return (
        <header>
            <h1 id="logo">EL</h1>
            <nav id="container">
                <ul id="nav-ul">
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a id="contact-a" href="#contact-popup">Contact</a></li>
                </ul>      
                <Contact />
            </nav>

        </header>
        
    );
}
 

export default Navbar;