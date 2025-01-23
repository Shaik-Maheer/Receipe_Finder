import React from 'react';

const categories = ['Food', 'Recipes', 'Health', 'Lifestyle'];

const BlogCategories = () => {
  return (
    <div className="blog-categories py-8 px-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Categories</h2>
      <div className="flex justify-center gap-4 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-6 py-2 rounded-full bg-[#F7F7F7] text-[#7AA93C] font-medium hover:bg-[#E6E6E6]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
