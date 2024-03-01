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
    heading: `LEARN & IMPROVE`,
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
        <div className="hero relative">
          <div className="absolute top-0 bottom-0 right-0 left-0 videoContainer w-full h-full overflow-hidden">
            <div className="videoOverlay position absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-gradient-to-br from-black z-[1]"></div>
            <video
              className="absolute bottom-0 right-0 left-0 videoContainer w-full h-full object-cover"
              src="/videos/abstract-rising-dotted-platform.mp4"
              playsInline
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="relative textContainer py-20 px-4 md:max-w-4xl md:mx-auto md:py-40 z-[2]">
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
        </div>
      </section>
      <section className="px-5 py-14 md:py-28">
        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto md:flex-row md:items-stretch md:h-max md:flex-wrap md:gap-6 min-[856px]:justify-evenly">
          {renderedContent}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
