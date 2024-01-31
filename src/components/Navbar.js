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
          <div className="inline-flex justify-center items-center w-6 h-6">
            <div className="relative w-full h-0.5">
              <span className="absolute top-[-7px] w-full h-[1px] bg-black"></span>
              <span className="absolute w-full h-[1px] bg-black"></span>
              <span className="absolute top-[7px] w-full h-[1px] bg-black"></span>
            </div>
          </div>
          <ul>{renderedNavmenuItems}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
