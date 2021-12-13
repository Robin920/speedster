import React from 'react';
import './LandingPage.css';
import image from './../../Assets/TypingImage.jpg'
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    return(
        <div className="landing-container">
           <div data-aos="fade-right"
           className="landing-left">
               <h1 className="landing-header">Can you Type....</h1>

               <div className="typewriter">
               <Typewriter
                 options={{
                    strings: ['Fast?', 'Quick?','Correct?'],
                    autoStart: true,
                    loop: true,
                    }}
                />
               </div>
           </div>

           <div data-aos="fade-left"
           className="landing-right">
               <img 
               className="typing-image"
               src={image} alt="Fast Typing" />
           </div>
        </div>
    );
}

export default LandingPage;