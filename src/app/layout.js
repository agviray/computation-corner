import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: `Computation Corner`,
  description: `Computation Corner is an ongoing project that contains data structure and algorithm information ranging from terms and definitions, to problems and solutions.`,
};

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

const RootLayout = ({ children }) => {
  const renderedNavmenuItems = NAV_ITEMS.map(({ text, href }, index) => (
    <li key={index}>
      <Link href={href}>
        <span>{text}</span>
      </Link>
    </li>
  ));

  return (
    <html lang="en">
      <body>
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
        <div className="contentWrapper">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
