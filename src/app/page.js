import { Fragment } from 'react';
import ThemedLink from '../components/ThemedLink';
import Card from '../components/Card';

const cardContent = [
  {
    icon: {
      src: '/images/laptop-icon.svg',
      alt: 'Icon of a laptop with a closing tag on its screen',
    },
    heading: `PURPOSE`,
    text: `What is Computation Corner?`,
    linkHref: `/about`,
  },
  {
    icon: {
      src: '/images/head-with-brain-outline-icon.svg',
      alt: 'Icon of an outline of a head with a brain',
    },
    heading: `LEARN, SOLVE, IMPROVE`,
    text: `Record of algorithm problems and my current solutions.`,
    linkHref: `/problems`,
  },
  {
    icon: {
      src: '/images/glossary-icon.svg',
      alt: 'Icon of a book with a circled letter i on top',
    },
    heading: `GLOSSARY`,
    text: `Terms and definitions.`,
    linkHref: `/glossary`,
  },
];

const heroThemedLinkClasses = {
  textColor: 'text-white',
  borderColor: 'border-darkLime',
  hoverTextColor: 'hover:text-darkLime',
  hoverBorderColor: 'hover:border-darkerDarkGreen',
  hoverBgColor: 'hover:bg-darkerDarkGreen',
  activeTextColor: 'active:text-white',
  activeBgColor: 'active:bg-black',
};

const HomePage = () => {
  const renderedContent = cardContent.map(
    ({ icon, heading, text, linkHref }, index) => (
      <Fragment key={index}>
        <Card icon={icon} heading={heading} text={text} linkHref={linkHref} />
      </Fragment>
    )
  );
  return (
    <main className="pt-offsetNavbarHeight">
      <section className="bg-black">
        <div className="hero mx-auto py-20 md:py-28 px-4 md:max-w-4xl">
          <h1 className="font-notoSansMono text-darkLime font-bold text-5xl tracking-wide md:tracking-wider lg:text-6xl">
            <span className="inline-flex flex-col">
              <span className="inline-block lg:padding-bottom: pb-2">
                COMPUTATION
              </span>
              <span className="inline-block">CORNER</span>
            </span>
          </h1>
          <div className="pt-6 lg:pt-8">
            <ThemedLink
              href={'/about'}
              themeClasses={heroThemedLinkClasses}
              text={`WHAT'S THIS?`}
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-14 md:py-28">
        <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
          {renderedContent}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
