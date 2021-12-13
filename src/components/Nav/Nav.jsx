import React from 'react'
import './Nav.css';
import logo from './../../Assets/logo.svg'

const Nav = () => {
    return(
        <div className="nav-container">
           <div className="nav-left">
               <img className="top-logo" src={logo} alt="superhero" />
               <p className="logo-text">SpeedSter!</p>
           </div>

           <div className="nav-right">
               <a className="link" 
                  target="_blank"
                  href="https://github.com/Robin920?tab=repositories"
                  rel="noreferrer">
                      My Repository
                  </a>
           </div>
        </div>
    );
}

export default Nav;