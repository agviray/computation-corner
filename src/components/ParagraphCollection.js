const ParagraphCollection = ({ paragraphs }) => {
  const renderedContent = paragraphs.map(({ text }, index) => (
    <p
      key={index}
      className={`${
        index === 0 ? '' : 'pt-4'
      } font-archivo font-light text-lightBlack text-base tracking-wider md:text-lg`}
    >
      {text}
    </p>
  ));
  return <>{renderedContent}</>;
};

export default ParagraphCollection;
