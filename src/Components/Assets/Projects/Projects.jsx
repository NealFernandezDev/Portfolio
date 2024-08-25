import React from 'react'
import './Projects.css'
import Grillaire from '../images/Grillaire.png';
import NorthEast from '../images/north-east.png';
import Portfolio from '../images/Portfolio.png';

const Projects = () => {
  return (
    <div id="projects-container">
        <div id='projects-link'>
            <div id="line"></div><a href="#projects"><h3>Projects</h3></a>
        </div>
        <div id="grillaire-container">
            <div id="grillaire-img">
                <img src={Grillaire} alt="Grillaire"/>
            </div>
            <div id="grillaire-text">
                <h4><a href="" alt="">Grillaire Landing Page</a> <img src={NorthEast} alt="NorthEast"/></h4>
                <p>
                    Pre-built theme recreated using React, SASS/SCSS, and JavaScript. This project 
                    demonstrates my ability to take existing designs and translate them into functional, 
                    dynamic web applications.
                </p>
                <button id="react">React</button>
                <button id="scss">SCSS</button>
                <button id="javascript">JavaScript</button>
                <button id="netlify">Netlify</button>
            </div>
        </div>
        <div id="portfolio-container">
            <div id="portfolio-img">
                 <img src={Portfolio} alt="Portfolio"/>
            </div>
            <div id="portfolio-text">
                <h4><a href="https://github.com/NealFernandezDev/Portfolio" alt="Github Project Link">Portfolio Page</a> <img src={NorthEast} alt="NorthEast"/></h4>
                <p>
                    Pre-built theme recreated using React, SASS/SCSS, and JavaScript. This project 
                    demonstrates my ability to take existing designs and translate them into functional, 
                    dynamic web applications.
                </p>
                <button id="react">React</button>
                <button id="css">CSS</button>
                <button id="javascript">JavaScript</button>
                <button id="vercel">Vercel</button>
            </div>
        </div>
    </div>
  )
}

export default Projects