import React from 'react';
import './Footer.css';
import fbLogo from './../../Assets/fblogo.png';
import linkedinLogo from './../../Assets/linkedinlogo.png'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-text">Enjoy Speedster!!</div>
            <div className="footer-image">
                <a  className="footer-image-one"
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer">
                     <img src={fbLogo} alt="facebook"/>
                  </a>
                  <a  className="footer-image-two"
                  target="_blank"
                  href="https://www.linkedin.com/"
                  rel="noreferrer">
                     <img src={linkedinLogo} alt="Linkedin"/>
                  </a>
            </div>

            <div className="copyright"><p>&copy; Copyright Content Robin920.cc</p></div>
        </div>
    );
}

export default Footer;