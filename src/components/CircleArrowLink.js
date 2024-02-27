import Link from 'next/link';
import Image from 'next/image';
import forwardArrow from '../../public/images/forward-arrow-01.svg';

const CircleArrowLink = ({ linkHref }) => {
  return (
    <Link href={linkHref}>
      <span className="inline-flex justify-center items-center w-12 h-12 bg-darkLime rounded-full">
        <Image src={forwardArrow} alt="Arrow icon" width="25" />
      </span>
    </Link>
  );
};

export default CircleArrowLink;
