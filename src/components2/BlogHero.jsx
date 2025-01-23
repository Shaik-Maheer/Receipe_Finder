import React from 'react';
import Navbar from "../components1/Navbar";

const BlogHero = () => {
  return (
    <>
      <Navbar />
      <div className="blog-hero py-20 px-6 text-center bg-[#7AA93C] text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#262626]">Discover Our Latest Blog Posts</h1>
        <p className="text-lg mb-6">Explore topics that inspire, educate, and entertain.</p>
        <a
          href="https://medium.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#7AA93C] px-6 py-3 rounded-md font-semibold hover:bg-[#262626] hover:text-white transition"
        >
          Browse Articles
        </a>
      </div>
    </>
  );
};

export default BlogHero;
