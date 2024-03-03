import ParagraphCollection from '@/components/ParagraphCollection';
import Accordion from '../../components/Accordion';

const heroContent = {
  heading: `Glossary`,
  backgroundImage: {
    src: ``,
    alt: ``,
  },
};

const contentDescription = [
  {
    text: `Click a term to view its definition.`,
  },
];

const glossaryContent = [
  {
    term: `algorithm`,
    definition: [
      `An algorithm in programming, is a set of instructions that a computer follows to solve a problem or perform a task.`,
    ],
    example: [
      `For example, you could write/create an algorithm that can be used to sort a list of numbers from least to greatest. To accomplish this task, your algorithm might say:`,
      `1. Focus on the first two numbers in the list.`,
      `2. If the first number is greater than the second, swap their positions in the list.`,
      `3. Move to the next pair of numbers in the list, and repeat step 2.`,
      `4. Repeat steps 2 and 3 until you reach the end of the list.`,
      `5. If you had to make any swaps while going through the list, start again from the beginning of the list and compare two numbers at a time, while swapping their positions as needed. Otherwise, you're done.`,
    ],
  },
  {
    term: `data structure`,
    definition: [
      `In programming, data structures are ways to organize and store data in a computer's memory.`,
    ],
    example: [
      `For example, picture a simple list. You can put items in a list, such as groceries that you need to buy.`,
      `Each item (or element) in the list, has its own specific place in said list. You can also add new items, remove items, or determine the amount of items that are in the list.`,
      `In programming, this list would be called an array. An array is a type of data structure.`,
      `There are many other types of data structure, and each type has its own way of organizing and storing data.`,
      `Some data structures types are like lists, while others are more like tables. There are other data structure types that are even more complex than both lists and tables.`,
      `Programmers use data structures to make their code more efficient and easier to work with.`,
    ],
  },
];

const GlossaryPage = () => {
  const renderedGlossaryContent = glossaryContent.map(
    ({ term, definition }, index) => (
      <article key={index}>
        <Accordion heading={term} textSnippet={definition[0]} />
      </article>
    )
  );

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
            <div className="description pb-12">
              <ParagraphCollection paragraphs={contentDescription} />
            </div>
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
