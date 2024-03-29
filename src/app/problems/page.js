import ParagraphCollection from '@/components/ParagraphCollection';

const heroContent = {
  heading: `Problems`,
  backgroundImage: {
    src: ``,
    alt: ``,
  },
};

const contentParagraphs = [
  {
    text: `Each item in the list below contains an algorithm problem and my logic for solving it. Click on an item to view its contents.`,
  },
];

const ProblemsPage = () => {
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

export default ProblemsPage;
