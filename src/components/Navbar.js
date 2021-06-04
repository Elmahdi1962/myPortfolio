import React from 'react'
import './styles/Navbar.css';
import { useEffect } from "react";
import emailjs from 'emailjs-com';

function Navbar() {
    useEffect(() => {   

        document.addEventListener("click",resumeClickHandler);

        return () => {

            document.getElementById("resume-button").removeEventListener("click",resumeClickHandler);

        }
        
    });

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_rvuydvd', 'template_0ivnf0o', e.target, 'user_Oz9TsmfdU3LnBmnG5ensO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      }

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

                    <h1>Elegant Contact Form</h1>
                    <form class="cf" onSubmit={sendEmail}>
                    <div class="half left cf">
                        <input name="name" type="text" id="input-name" placeholder="Name"/>
                        <input name="email" type="email" id="input-email" placeholder="Email address"/>
                        <input name="subject" type="text" id="input-subject" placeholder="Subject"/>
                    </div>
                    <div class="half right cf">
                        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    </div>  
                    <input type="submit" value="Submit" id="input-submit"/>
                    </form>


                </nav>
            </div>
            

        </header>
        
    );
}



function resumeClickHandler(e){
    if(document.getElementById("resume-button").contains(e.target)){

        document.getElementById("resume-popup").style.cssText="height: 50px; color: black";

    }
    else{

        document.getElementById("resume-popup").style.cssText="height: 0px; color: transparent";

    }

    console.log("popout");
}


export default Navbar;