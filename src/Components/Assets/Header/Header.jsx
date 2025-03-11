import React from 'react';
import Github from '../images/github.png';
import './Header.css';

function Header() {
    return (
        <div id='header'>
            <h1>Neal Fernandez</h1>
            <h3>Web Developer in Training</h3>
            <a href="https://github.com/NealFernandezDev" target="_blank" rel="noreferrer"><img  src={Github} alt="Github"/></a>
        </div>
    );
}

export default Header;
