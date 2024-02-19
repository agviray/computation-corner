import ParagraphCollection from '@/components/ParagraphCollection';

const heroContent = {
  heading: `Glossary`,
  backgroundImage: {
    src: ``,
    alt: ``,
  },
};

const contentParagraphs = [
  {
    text: `Click a term to view its definition.`,
  },
];

const GlossaryPage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section>
        <div className="hero py-14 md:py-28 bg-black">
          <h1 className="font-notoSansMono font-bold text-center text-darkLime text-3xl md:text-4xl tracking-wide">
            {heroContent.heading}
          </h1>
        </div>
      </section>
      <div className="px-5 py-20 md:py-28">
        <section>
          <div className="max-w-3xl mx-auto">
            <ParagraphCollection paragraphs={contentParagraphs} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default GlossaryPage;
