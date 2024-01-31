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
        <span>{text}</span>
      </Link>
    </li>
  ));

  return (
    <header>
      <nav>
        <div className="innerContainer">
          <div className="logoContainer">
            <Link href="/">
              <span>ComCor</span>
            </Link>
          </div>
          <div
            className="inline-flex justify-center items-center w-6 h-6 hover:cursor-pointer"
            onClick={toggleMenu}
          >
            <div
              className={`relative w-full h-[1px] bg-black transition-all duration-100 ${
                isMenuOpen ? `bg-transparent rotate-[135deg]` : ``
              }`}
            >
              <span
                className={`absolute top-[-7px] w-full h-[1px] bg-black transition-all duration-100 ${
                  isMenuOpen ? `top-[0px]` : ``
                }`}
              ></span>
              <span
                className={`absolute top-[7px] w-full h-[1px] bg-black transition-all duration-100 ${
                  isMenuOpen ? `top-[0px] rotate-90` : ``
                }`}
              ></span>
            </div>
          </div>
          <ul>{renderedNavmenuItems}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
