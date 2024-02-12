const HomePage = () => {
  return (
    <main>
      <section>
        <div className="innerContainer flex flex-col justify-center items-center min-h-screen">
          <h1>Computation Corner</h1>
          <div className="pt-8 max-w-3xl">
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
