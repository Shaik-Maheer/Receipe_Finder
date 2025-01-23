import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // here iam  Use useCallback for memoization to avoid unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-[#262626] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <img src="/logo.png" alt="Logo" height={200} width={150} />
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-[#7AA93C] hover:border-b-2 hover:border-[#7AA93C] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#7AA93C] hover:border-b-2 hover:border-[#7AA93C] transition-all duration-200"
          >
            Blog
          </Link>
          <Link
            to="/recipes"
            className="hover:text-[#7AA93C] hover:border-b-2 hover:border-[#7AA93C] transition-all duration-200"
          >
            Recipes
          </Link>
          <Link
            to="/favorites"
            className="hover:text-[#7AA93C] hover:border-b-2 hover:border-[#7AA93C] transition-all duration-200"
          >
            Favorites
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-[#7AA93C] hover:border-b-2 hover:border-[#7AA93C] transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#262626]">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-[#7AA93C] hover:text-white transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block px-4 py-2 hover:bg-[#7AA93C] hover:text-white transition-all duration-200"
          >
            Blog
          </Link>
          <Link
            to="/recipes"
            className="block px-4 py-2 hover:bg-[#7AA93C] hover:text-white transition-all duration-200"
          >
            Recipes
          </Link>
          <Link
            to="/favorites"
            className="block px-4 py-2 hover:bg-[#7AA93C] hover:text-white transition-all duration-200"
          >
            Favorites
          </Link>
          <Link
            to="/contact-us"
            className="block px-4 py-2 hover:bg-[#7AA93C] hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// In plain JavaScript, you're right that functions don't get re-created unless reassigned. However, in React, components are re-rendered when state/props change, and functions inside the components are re-created on each render.
// useCallback helps ensure that functions don't get re-created unnecessarily, improving performance when those functions are passed as props or used in useEffect or other hooks.


// React normally recreates functions every time a component re-renders.
// useCallback prevents this by memoizing the function, making it the same function across renders unless its dependencies change.
// The function only gets recreated when:
// The component renders for the first time.
// One of the dependencies in the useCallback array changes.
