import Link from 'next/link';

const ThemedLink = ({ href, themeClasses, text }) => {
  const {
    textColor,
    borderColor,
    hoverTextColor,
    hoverBorderColor,
    hoverBgColor,
    activeTextColor,
    activeBgColor,
  } = themeClasses;

  return (
    <>
      <Link href={href}>
        <span
          className={`inline-flex items-center h-10 px-4 ${textColor} text-lg font-notoSansMono tracking-wide border border-solid ${borderColor} lg:h-12 lg:px-6 transition ease-in transition-all ${hoverTextColor} ${hoverBorderColor} ${hoverBgColor} ${activeTextColor} ${activeBgColor}`}
        >
          {text}
        </span>
      </Link>
    </>
  );
};

export default ThemedLink;
