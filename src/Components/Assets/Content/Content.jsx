import React, {useState} from 'react';
import './Content.css';
import NorthEast from '../images/north-east.png';
import PdfModal from '../PdfModal/PdfModal';
import Resume from '../images/Neal_Fernandez_Resume.pdf';


const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='content'>
      <div id='about'>
          <div id="line"></div><a href="#about"><h3>About</h3></a>
          <p>
              My first experience with programming was my mid teens (34 now) when there
              was a website that allowed us to create and design our own page/guest book where friends 
              or anyone can write on. A couple of friends and I 
              built pages for people as well as various groups. But that ended once other different 
              types of social media outlets came out (myspace, facebook etc.)
              <br/>
              <br/>
              My current focus with my coding journey is to find a company I can learn and hopefully grow with through 
              an internship. What I enjoy most with coding is putting together a concept a designer 
              has built and then making it a working reality for 
              others. To me coding is like a puzzle but instead functions, variables, components, and various others are the pieces.
              <br/>
              <br/>
              When I am not working on a project, I'm usually playing video games, working out,
              watching movies, playings some sports, walking my dog or biking if the weather permits.
              <br />
              <br />
              <h4>
        <a href={Resume} alt="View Full Résumé" onClick={openModal}>
          View Full Résumé
          <img src={NorthEast} alt="NorthEast" />
        </a>
      </h4>
      {isModalOpen && <PdfModal pdfUrl={Resume} closeModal={closeModal} />}
          </p> 
      </div>
    </div>
  )
}

export default Content;