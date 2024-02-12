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
      <Link href={href} onClick={toggleMenu}>
        <span className="inline-block w-full py-3 text-white text-center md:px-4 md:py-0 md:leading-[64px] hover:tracking-[1.5px] hover:text-darkLime hover:bg-black transition transition-all">
          {text}
        </span>
      </Link>
    </li>
  ));

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <nav className="relative h-navbarHeight bg-darkestDarkGreen">
        <div className="innerContainer relative flex justify-between items-center h-full px-4">
          <div className="logoContainer">
            <Link href="/">
              <span className="text-darkLime">ComCor</span>
            </Link>
          </div>
          <div
            className={`navMenu fixed top-0 right-0 bottom-0 w-9/12 py-24 bg-darkerDarkGreen z-[1] transition transition-all md:relative md:flex md:w-auto md:h-full md:py-0 md:bg-transparent md:translate-x-0 md:transition-none ${
              isMenuOpen ? 'translate-x-[0]' : 'translate-x-full'
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
              className={`relative w-full h-[1px] bg-white z-[1] transition transition-all ${
                isMenuOpen ? 'rotate-[135deg]' : 'rotate-0'
              }`}
            >
              <span
                className={`absolute w-full h-[1px] bg-white z-[1] transition transition-all ${
                  isMenuOpen ? 'top-[0]' : 'top-[-7px]'
                }`}
              ></span>
              <span
                className={`absolute w-full h-[1px] bg-white z-[1] transition transition-all ${
                  isMenuOpen ? 'top-[0] rotate-90' : 'top-[7px] rotate-0'
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`overlay fixed inset-0 bg-transparentBlack transition transition-all md:hidden ${
              isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
            onClick={toggleMenu}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
