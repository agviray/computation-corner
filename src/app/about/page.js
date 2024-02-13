const AboutPage = () => {
  return (
    <main className="pt-offsetNavbarHeight">
      <section>
        <div className="hero py-14 md:py-28">
          <h1 className="text-center">About Page</h1>
        </div>
      </section>
      <div className="px-5">
        <section>
          <div className="max-w-3xl">
            <p>
              Computation Corner is an ongoing, personal project that contains a
              collection of information relating to data structures and
              algorithms. Such information includes a glossary, as well as
              problems and solutions.
            </p>
            <p className="pt-4">
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
