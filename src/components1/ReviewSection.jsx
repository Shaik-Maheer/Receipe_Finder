import React from 'react';

const reviews = [
  {
    name: "John Doe",
    review: "The recipes here are amazing! I've learned so much!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "I love the variety of content on the blog. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    name: "Emily White",
    review: "Incredible food ideas, easy to follow. Will definitely come back!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-[#7AA93C] text-white py-20 px-4">
      <h2 className="text-4xl text-center font-bold mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-transform hover:scale-105"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <div className="flex justify-center mb-4">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.713 5.28h5.547c.969 0 1.371 1.24.588 1.81l-4.501 3.276 1.714 5.28c.3.921-.755 1.688-1.54 1.11l-4.501-3.276-4.501 3.276c-.785.577-1.84-.19-1.54-1.11l1.713-5.28-4.501-3.276c-.783-.57-.381-1.81.588-1.81h5.547l1.713-5.28z" />
                  </svg>
                ))}
            </div>
            <p className="italic text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
