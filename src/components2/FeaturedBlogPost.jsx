import React from 'react';

const FeaturedBlogPost = () => {
  return (
    <div className="featured-blog py-10 px-6 bg-[#F7F7F7] rounded-lg shadow-md text-center">
      <img
        src="/blog1.avif"
        alt="Featured Blog"
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold text-[#7AA93C] mb-2">Editor's Pick: Healthy Eating Tips</h2>
      <p className="text-gray-700 mb-4">
        Learn how to maintain a balanced diet with these easy tips.
      </p>
      <a
          href="    https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#DBBDA1] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#262626] hover:text-white transition"
        >
          Read More
        </a>
   
    </div>
  );
};

export default FeaturedBlogPost;
