import React, {useState} from 'react';
import './Content.css';
import NorthEast from '../images/north-east.png';
import PdfModal from '../PdfModal/PdfModal';
import Resume from '../images/neal-fernandez-resume1.pdf';


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
              My current focus with my coding journey is to find a company I can learn and hopefully grow with through 
              an internship (associated with my school or not). What I enjoy most with coding is putting together a concept a designer 
              has built and then making it a working reality for others.
              <br/>
              <br/>
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