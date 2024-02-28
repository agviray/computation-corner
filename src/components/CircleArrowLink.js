import Image from 'next/image';
import forwardArrowDark from '../../public/images/forward-arrow-dark.svg';
import forwardArrowLight from '../../public/images/forward-arrow-light.svg';

// group-hover styles are applied when parent group is hovered.
const CircleArrowLink = () => {
  return (
    <div className="relative inline-flex justify-center items-center w-12 h-12 rounded-full border-[3px] border-solid border-darkerLime overflow-hidden transition ease-in transition-all group-hover:bg-midDarkGreen group-hover:border-midDarkGreen">
      <div className="absolute right-0 inline-flex items-center w-24 transition ease-in transition-all group-hover:right-[-48px]">
        <span className="relative left-[3px] inline-block w-12">
          <Image
            src={forwardArrowLight}
            alt="Arrow icon"
            width="25"
            className="mx-auto"
          />
        </span>
        <span className="relative left-[3px] inline-block w-12">
          <Image
            src={forwardArrowDark}
            alt="Arrow icon"
            width="25"
            className="mx-auto"
          />
        </span>
      </div>
    </div>
  );
};

export default CircleArrowLink;
