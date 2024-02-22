import ParagraphCollection from '../../components/ParagraphCollection';

const heroContent = {
  heading: `About`,
  backgroundImage: {
    src: ``,
    alt: ``,
  },
};

const contentParagraphs = [
  {
    text: `Computation Corner is an ongoing, personal project that contains a
    collection of information relating to data structures and
    algorithms. Such information includes a glossary, as well as
    algorithmic problems and my solutions.`,
  },
  {
    text: `I'm building Computation Corner with the intentions of having
    it serve as both a direct resource for DSA information, and a space to record my
    logic for solving various DSA problems.`,
  },
];

const AboutPage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section>
        <div className="hero py-20 md:py-28 bg-black">
          <h1 className="font-notoSansMono font-bold text-center text-darkLime text-3xl md:text-4xl tracking-wide">
            {heroContent.heading}
          </h1>
        </div>
      </section>
      <div className="px-5 py-14 md:py-28">
        <section>
          <div className="max-w-3xl mx-auto">
            <ParagraphCollection paragraphs={contentParagraphs} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
