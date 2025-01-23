import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <img src="/logo.png" alt="Heerlicious Logo" height={200} width={150} />
        <div className="text-center">
          <p className="italic text-gray-300 text-lg">
            "Where every bite tells a story!"
          </p>
          <p className="text-sm text-gray-400">
            (Also, we make calories totally worth it.)
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="/"
            className="hover:text-[#7AA93C] transition-all duration-200"
          >
            Home
          </a>
          <a
            href="/blog"
            className="hover:text-[#7AA93C] transition-all duration-200"
          >
            Blog
          </a>
          <a
            href="/recipes"
            className="hover:text-[#7AA93C] transition-all duration-200"
          >
            Recipes
          </a>
          <a
            href="/favorites"
            className="hover:text-[#7AA93C] transition-all duration-200"
          >
            Favorites
          </a>
          <a
            href="/contact-us"
            className="hover:text-[#7AA93C] transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f text-xl hover:text-[#7AA93C] transition duration-200"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram text-xl hover:text-[#7AA93C] transition duration-200"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter text-xl hover:text-[#7AA93C] transition duration-200"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2024 Heerlicious. Made with <span className="text-red-500">❤</span> for food lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
