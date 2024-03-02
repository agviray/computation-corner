'use client';
import { useState } from 'react';

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { heading, snippetText } = content; // Destructured properties from content prop

  return (
    <div className="accordion">
      <div
        className={`headingContainer ${
          isOpen ? `bg-black border-black` : `border-lightGray`
        } group flex justify-between px-4 py-6 border-t-[1px] border-b-[1px] hover:border-black hover:bg-black hover:cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="headingText font-notoSansMono font-bold text-darkerLime text-2xl md:text-3xl">
          {heading}
        </span>
        <div className="togglerContainer inline-block">
          <span
            className={`${
              isOpen
                ? `rotate-[-45deg] border-offWhite`
                : `rotate-[135deg] border-lightBlack`
            } toggler inline-block w-2.5 h-2.5 border-t-2 border-r-2 group-hover:border-offWhite`}
          ></span>
        </div>
      </div>
      <div
        className={`mainContentContainer ${
          isOpen ? `block` : `hidden`
        } px-4 py-6 font-archivo font-light text-lightBlack text-base tracking-wider border border-black md:text-lg`}
      >
        {snippetText}
      </div>
    </div>
  );
};

export default Accordion;
