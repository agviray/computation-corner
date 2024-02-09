'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    text: `Home`,
    href: `/`,
  },
  {
    text: `About`,
    href: `/about`,
  },
  {
    text: `Problems`,
    href: `/problems`,
  },
  {
    text: `Glossary`,
    href: `/glossary`,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderedNavmenuItems = NAV_ITEMS.map(({ text, href }, index) => (
    <li key={index}>
      <Link href={href}>
        <span className="inline-block w-full text-center py-3 md:px-4 md:py-0 md:leading-[64px]">
          {text}
        </span>
      </Link>
    </li>
  ));

  return (
    <header className="w-full">
      <nav className="h-16 bg-[red]">
        <div className="innerContainer relative flex justify-between items-center h-full px-4">
          <div className="logoContainer">
            <Link href="/">
              <span>ComCor</span>
            </Link>
          </div>
          <div
            className={`navMenu fixed top-0 right-0 bottom-0 w-9/12 py-24 bg-[lightgray] translate-x-full transition transition-all md:relative md:flex md:w-auto md:h-full md:py-0 md:translate-x-0 md:transition-none ${
              isMenuOpen ? 'translate-x-[0]' : ''
            }`}
          >
            <ul className="md:flex md:items-center md:h-full">
              {renderedNavmenuItems}
            </ul>
          </div>
          <div
            className="hamburger inline-flex justify-center items-center w-6 h-6 z-[1] hover:cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <div
              className={`relative w-full h-[1px] bg-black transition transition-all ${
                isMenuOpen ? `rotate-[135deg]` : ``
              }`}
            >
              <span
                className={`absolute top-[-7px] w-full h-[1px] bg-black transition transition-all ${
                  isMenuOpen ? `top-[0]` : ``
                }`}
              ></span>
              <span
                className={`absolute top-[7px] w-full h-[1px] bg-black transition transition-all ${
                  isMenuOpen ? `top-[0] rotate-90` : ``
                }`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
