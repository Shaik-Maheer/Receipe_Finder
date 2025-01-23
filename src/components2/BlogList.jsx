import React from 'react';

const blogPosts = [
  {
    title: '5 Quick Breakfast Recipes',
    description: 'Start your day right with these easy and nutritious recipes.',
    image: '/blog2.jpg',
    date: 'December 1, 2024',
    link: 'https://www.tasteofhome.com/collection/5-ingredient-easy-breakfast-ideas/',
  },
  {
    title: 'The Benefits of a Plant-Based Diet',
    description: 'Discover why plant-based meals are good for you and the planet.',
    image: '/blog3.webp',
    date: 'November 29, 2024',
    link: 'https://macromike.com.au/blogs/blog-posts/the-power-of-plant-based-eating',
  },
  {
    title: 'Top 10 Superfoods for Energy',
    description: 'Boost your energy levels with these superfoods.',
    image: '/blog4.jpg',
    date: 'November 25, 2024',
    link: 'https://www.dmoose.com/blogs/nutrition/top-10-superfoods',
  },
];

const BlogList = () => {
  return (
    <div className="blog-list py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="blog-card bg-[#F7F7F7] rounded-md shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover rounded-md mb-4 transition duration-300 hover:opacity-90"
          />
          <h3 className="text-xl font-semibold text-[#7AA93C] mb-2">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#262626] transition duration-300"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-gray-700 mb-2">{post.description}</p>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
