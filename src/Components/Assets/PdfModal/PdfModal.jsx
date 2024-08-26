import React from 'react';
import './PdfModal.css';

const PdfModal = ({ pdfUrl, closeModal }) => {
  return (
    <div className="pdf-modal-overlay" onClick={closeModal}>
      <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <iframe src={pdfUrl} title="PDF" className="pdf-viewer"></iframe>
      </div>
    </div>
  );
};

export default PdfModal;
