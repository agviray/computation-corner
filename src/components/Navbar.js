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
          <div className="hamburgerContainer">
            <span className="inline-block h-8 w-8 bg-black"></span>
          </div>
          <ul>{renderedNavmenuItems}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
