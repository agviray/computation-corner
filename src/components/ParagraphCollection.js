const ParagraphCollection = ({ paragraphs }) => {
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
  return <>{renderedContent}</>;
};

export default ParagraphCollection;
