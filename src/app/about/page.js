const AboutPage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section>
        <div className="hero py-14 md:py-28 bg-black">
          <h1 className="font-notoSansMono font-bold text-center text-darkLime text-3xl md:text-4xl">
            About
          </h1>
        </div>
      </section>
      <div className="px-5 py-20 md:py-28">
        <section>
          <div className="max-w-3xl mx-auto">
            <p className="font-archivo font-light text-lightBlack text-lg tracking-wider">
              Computation Corner is an ongoing, personal project that contains a
              collection of information relating to data structures and
              algorithms. Such information includes a glossary, as well as
              problems and solutions.
            </p>
            <p className="pt-6 font-archivo font-light text-lightBlack text-lg tracking-wider">
              I&apos;m building Computation Corner with the intentions of having
              it serve as both a direct DSA resource, and a space to record the
              logic involved in solving various problems.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
