'use client';
import { useState } from 'react';

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { heading, snippetText } = content; // Destructured properties from content prop

  return (
    <div className="accordion">
      <div className="headingContainer" onClick={() => setIsOpen(!isOpen)}>
        <span className="headingText">{heading}</span>
        <div className="togglerContainer">
          <span className="arrowToggler">{isOpen ? 'CLOSE' : 'OPEN'}</span>
        </div>
      </div>
      <div className="mainContentContainer">{snippetText}</div>
    </div>
  );
};

export default Accordion;
