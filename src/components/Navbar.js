import React from 'react'
import './styles/Navbar.css';
import { useEffect } from "react";

function Navbar() {
    useEffect(() => {   

        document.addEventListener("click",resumeClickHandler);

        return () => {

            document.getElementById("resume-button").removeEventListener("click",resumeClickHandler);

        }
        
    });

    

    return (
        <header>
            <div id="nav-container">
                <h1 id="logo">EL</h1>
                <nav id="container">
                    <ul id="nav-ul">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><button id="resume-button">Resume</button></li>
                        <li><button id="contact-button">Contact Me</button></li>
                    </ul>      
                    <div id="resume-popup">
                        <p>Download Resume from <a href="#">Here</a></p>
                    </div>
                </nav>
            </div>
            

        </header>
        
    );
}



function resumeClickHandler(e){
    if(document.getElementById("resume-button").contains(e.target)){

        document.getElementById("resume-popup").style.cssText="height: 50px; visibility: visible; color: black";

    }
    else{

        document.getElementById("resume-popup").style.cssText="height: 0px; visibility: visible; color: transparent";

    }

    console.log("popout");
}


export default Navbar;