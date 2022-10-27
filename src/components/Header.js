import React, { } from 'react';
import logo from '../images/coffee-logo-png.png';

function Header(){
    return(
        <div className="navbar-container"><img src={logo} alt="Coffee logo"/>
            <div className="navbar">
                <a href="/About" className="about-nav">About</a>
                <a href="/" className="home-nav">Coffee</a>
                <a href="/FunFacts" className="facts-nav">Fun Facts</a>
            </div>
        </div>
    );
}

export default Header;
