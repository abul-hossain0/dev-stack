import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-4 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 bg-gray-700 transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-700 transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <img src={Logo}></img>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-pink-500 transition hover:text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-medium text-gray-600 transition hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-105">
            Sign Up
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-md md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-pink-500"
            >
              Contact
            </a>

            <button className="w-fit text-sm font-medium text-gray-600">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
