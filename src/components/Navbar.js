import React from 'react'
import './styles/Navbar.css';
import { useEffect } from "react";
import emailjs from 'emailjs-com';

function Navbar() {
    var resumeOpen= false;
    var contactOpen = false;
    useEffect(() => {   

        document.addEventListener("click",(e) => {
            resumeClickHandler(e);
            contactClickHandler(e);
        });
       
        return () => {

            
            document.removeEventListener("click",resumeClickHandler);

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

      function resumeClickHandler(e){
          
        if(document.getElementById("resume-li").contains(e.target) && !resumeOpen){
    
            document.getElementById("resume-popup").style.cssText="height: 50px; color: black";
            resumeOpen= true;
            console.log("resumeopen",resumeOpen);
        }
        else{
    
            document.getElementById("resume-popup").style.cssText="height: 0px; color: transparent";
            resumeOpen= false;
            console.log("resumeopen",resumeOpen);
        }
    
        
    }
    

    function contactClickHandler(e){
        if(document.getElementById("contact-popup").contains(e.target)){
            console.log("inside poup contact");
         
        }else if(document.getElementById("contact-li").contains(e.target) && !contactOpen){
            
            document.getElementById("contact-popup").style.cssText="height: 250px; width: 300px";
            contactOpen= true;
            console.log("contactopen",contactOpen);
            
        }
        else{
    
            document.getElementById("contact-popup").style.cssText="height: 30px; width: 0px; transition: height 0.5s, width 0.5s 500ms;";
            contactOpen= false;
            console.log("contactopen",contactOpen);
        }
    
        
    }

    return (
        <header>
            <div id="nav-container">
                <h1 id="logo">EL</h1>
                <nav id="container">

                    <ul id="nav-ul">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li id="resume-li"><button id="resume-button">Resume</button></li>
                        <li id ="contact-li"><button id="contact-button">Contact Me</button></li>
                    </ul> 

                    {/* -----resume popup---- */}

                    <div id="resume-popup">
                        <p>Download Resume from <a href="#">Here</a></p>
                    </div>

                    {/* -----contact popup---- */}

                    <div id="contact-popup">
                        <h3>Contact me</h3>

                        {/* -----Form---- */}

                        <form onSubmit={sendEmail}>
                        
                        <input name="name" type="text" id="input-name" placeholder="Name" required/>
                        <input name="email" type="email" id="input-email" placeholder="Email address" required/>
                        <input name="subject" type="text" id="input-subject" placeholder="Subject" required/>
                       
                        <textarea name="message" type="text" id="input-message" placeholder="Message" required></textarea>
                          
                        <input type="submit" value="Send" id="input-submit"/>
                        </form>
                        {/* -----End Form---- */}
                    </div>

                </nav>
            </div>
            

        </header>
        
    );
}





export default Navbar;