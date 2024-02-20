import Link from 'next/link';

const ThemedLink = ({ href, text }) => {
  return (
    <>
      <Link href={href}>
        <span className="inline-flex items-center h-10 px-4 text-white text-l font-notoSansMono tracking-wide border-solid border border-darkLime lg:h-12 lg:px-6">
          {text}
        </span>
      </Link>
    </>
  );
};

export default ThemedLink;
