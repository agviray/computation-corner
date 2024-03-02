import ParagraphCollection from '@/components/ParagraphCollection';
import Accordion from '../../components/Accordion';

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

const glossaryContent = [
  {
    heading: `Accordion Item 1`,
    snippetText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci cupiditate illum explicabo facere voluptate delectus enim laboriosam autem reiciendis ea modi repellendus nesciunt, sit unde soluta beatae dolorem quo.`,
  },
  {
    heading: `Accordion Item 2`,
    snippetText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, quam officia explicabo unde obcaecati dignissimos amet alias omnis dicta sapiente?`,
  },
  {
    heading: `Accordion Item 3`,
    snippetText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto qui temporibus modi debitis. Illum nemo officiis a rerum placeat quidem blanditiis fuga, omnis repellendus.`,
  },
];

const GlossaryPage = () => {
  const renderedGlossaryContent = glossaryContent.map((content, index) => (
    <article key={index}>
      <Accordion content={content} />
    </article>
  ));

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
            <div className="glossaryContentContainer">
              <section>{renderedGlossaryContent}</section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GlossaryPage;
