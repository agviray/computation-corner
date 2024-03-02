import Link from 'next/link';
import Image from 'next/image';
import CircleArrowLink from '../components/CircleArrowLink';

// The Link is set as the group that triggers the group-hover styles on CircleArrowLink.
const Card = ({ icon, heading, text, linkHref }) => {
  return (
    <Link href={linkHref} className="group inline-block text-[0]">
      <div className="card md:flex md:flex-col w-64 border border-solid border-lighterBlack transition ease-in transition-all group-hover:scale-105 group-hover:shadow-xl md:h-full">
        <div className="iconContainer flex justify-center items-center min-h-[170px] p-8 bg-lightBlack">
          <span className="inline-block text-[0] leading-none">
            <Image src={icon.src} alt={icon.alt} width="100" height="100" />
          </span>
        </div>
        <div className="contentContainer px-5 py-8 md:flex-1 md:flex md:flex-col md:justify-between">
          <div>
            <h3 className="text-3xl text-midDarkGreen font-notoSansMono font-bold tracking-wide">
              {heading}
            </h3>
            <div className="textContainer pt-4 pb-6 text-lightestBlack text-base font-light font-archivo tracking-wider md:text-lg">
              {text}
            </div>
          </div>
          <div className="arrowContainer pt-4">
            <CircleArrowLink linkHref={linkHref} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
