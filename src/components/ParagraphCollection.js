const paragraphs = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat
  soluta hic, repellendus earum omnis, repellat deleniti consequuntur iste
  laborum dolorem quo similique ipsa, quasi impedit atque dignissimos quis
  corporis!`,
  },
  {
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus recusandae minus itaque illo ullam id obcaecati ab perspiciatis, quibusdam laborum neque, velit quisquam quaerat pariatur autem magni accusamus, modi molestias quam natus vitae? Esse sint cupiditate quod culpa asperiores earum labore alias ipsa dicta!`,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aut sint. Repellendus quibusdam accusamus facere velit! Unde, ipsa rerum. Quia sed quo minus illum aspernatur temporibus, ea, obcaecati voluptatum, quidem repellat ipsam numquam.`,
  },
];

const ParagraphCollection = () => {
  const renderedContent = paragraphs.map(({ text }, index) => (
    <p
      key={index}
      className={`${
        index === 0 ? '' : 'pt-4'
      } font-archivo font-light text-lightBlack text-base md:text-lg tracking-wider`}
    >
      {text}
    </p>
  ));
  return (
    <>
      <h2>This is the ParagraphCollection component</h2>
      <div className="max-w-3xl mx-auto">{renderedContent}</div>
    </>
  );
};

export default ParagraphCollection;
