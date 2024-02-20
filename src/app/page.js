import ThemedLink from '../components/ThemedLink';

const HomePage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section className="bg-black">
        <div className="hero mx-auto py-14 md:py-28 px-4 md:max-w-4xl">
          <h1 className="font-notoSansMono text-darkLime font-bold text-3xl tracking-wide md:text-4xl md:tracking-wider lg:text-5xl">
            <span className="inline-flex flex-col">
              <span className="inline-block lg:padding-bottom: pb-2">
                COMPUTATION
              </span>
              <span className="inline-block">CORNER</span>
            </span>
          </h1>
          <div className="pt-6 lg:pt-8">
            <ThemedLink href={'/about'} text={`WHAT'S THIS?`} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
