const FooterContent = () => {
  return (
    <div className="flex justify-center p-5 items-center bg-black">
      <p className="font-archivo font-light text-white text-base">
        Made with <span className="text-lg">☕</span> by{' '}
        <a href="https://www.allanviray.com" target="_blank" rel="noreferrer">
          <span className="text-darkLime">Allan Viray</span>
        </a>
      </p>
    </div>
  );
};

export default FooterContent;
