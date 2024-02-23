import Image from 'next/image';

const Card = ({ icon, heading, text }) => {
  return (
    <div className="card w-64 border border-solid border-lightBlack">
      <div className="iconContainer flex justify-center items-center p-8 bg-black">
        <span className="inline-block text-[0] leading-none">
          <Image src={icon.src} alt={icon.alt} width="100" height="100" />
        </span>
      </div>
      <div className="contentContainer px-5 py-8">
        <h3 className="text-3xl text-midDarkGreen font-notoSansMono font-bold tracking-wide">
          {heading}
        </h3>
        <div className="textContainer pt-4 pb-6 text-lightestBlack text-base font-light font-archivo tracking-wider md:text-lg">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Card;
