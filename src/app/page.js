import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section className="bg-black">
        <div className="hero py-14 md:py-28 pl-4">
          <h1 className="font-notoSansMono text-darkLime font-bold text-3xl tracking-wide md:text-4xl md:tracking-wider">
            <span className="inline-flex flex-col">
              <span className="inline-block">COMPUTATION</span>
              <span className="inline-block">CORNER</span>
            </span>
          </h1>
          <div className="pt-6">
            <Link href="/about">
              <span className="inline-flex items-center h-10 px-4 text-white text-l font-notoSansMono tracking-wide border-solid border border-darkLime">
                WHAT&apos;S THIS?
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
