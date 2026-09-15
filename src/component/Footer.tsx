const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-xs font-bold text-white">
                DS
              </div>

              <span className="text-lg font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-500 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-1">
            {/* Company */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                Company
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-500 transition hover:text-pink-500"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-500 transition hover:text-pink-500"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#careers"
                    className="text-sm text-gray-500 transition hover:text-pink-500"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-800">
                Legal
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#privacy"
                    className="text-sm text-gray-500 transition hover:text-pink-500"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#terms"
                    className="text-sm text-gray-500 transition hover:text-pink-500"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-gray-100" />

        <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition hover:text-pink-500">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
