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
                <h4><a href="https://grillaire.vercel.app/" alt="Grillaire Landing Page">Grillaire Landing Page <img src={NorthEast} alt="NorthEast"/></a></h4>
                <p>
                    Pre-built theme recreated using React, SASS/SCSS, and JavaScript. This project 
                    demonstrates my ability to take existing designs and translate them into functional, 
                    dynamic web applications. 
                    <br />
                    Link to source <a href="https://demo.templatemonster.com/demo/374456.html?_gl=1*vl3qcf*_gcl_au*MTk3
                                NTU1OTMxMi4xNzIzMDQxOTI2*_ga*MjEzMjU4ODAxOS4xNzIzMDQxOTIz*_ga_FTPYEGT5LY*MTcyM
                                zIyMjk0My40LjEuMTcyMzIyMjk4Ny4xNi4wLjA." alt="Grillaire Demo Link">here</a> and 
                                repo <a href="https://github.com/NealFernandezDev/Grillaire" alt="Grillaire Repository">here</a>.
                    <br />
                    <br /> 
                    Listed below are the technologies and tools used.
                </p>
                <button id="react">React</button>
                <button id="scss">SCSS</button>
                <button id="javascript">JavaScript</button>
                <button id="vercel">Vercel</button>
                <button id="gimp">Gimp</button>
                <button id="imagecolorpicker">IMAGECOLORPICKER.COM</button>
                <button id="flaticon">flaticon.com</button>
            </div>
        </div>
        <div id="portfolio-container">
            <div id="portfolio-img">
                 <img src={Portfolio} alt="Portfolio"/>
            </div>
            <div id="portfolio-text">
                <h4><a href="https://github.com/NealFernandezDev/Portfolio" alt="Github Project Link">Portfolio Page</a> <img src={NorthEast} alt="NorthEast"/></h4>
                <p>
                    This is a Senior Frontend Engineer's portfolio that I found online used as a template to 
                    replcate and build upon. Includes React, CSS, JavaScript, and deployed with Vercel.
                    <br />
                    Link to source click <a href="https://brittanychiang.com/" 
                    alt="Brittany Chiang Portfolio">here</a>.
                    <br />
                    <br />
                    Listed below are the technologies and tools used.
                </p>
                <button id="react">React</button>
                <button id="css">CSS</button>
                <button id="javascript">JavaScript</button>
                <button id="vercel">Vercel</button>
                <button id="gimp">Gimp</button>
                <button id="imagecolorpicker">IMAGECOLORPICKER.COM</button>
                <button id="flaticon">flaticon.com</button>
            </div>
        </div>
    </div>
  )
}

export default Projects