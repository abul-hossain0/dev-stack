import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-600 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="hidden w-1/2 items-center justify-center lg:flex">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
