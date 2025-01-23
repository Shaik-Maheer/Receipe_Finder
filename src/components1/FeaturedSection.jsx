import React from 'react';

const FeaturedSection = () => {
  return (
    <div className="py-20 bg-[#F9FAFB] text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
        {/* Recipe 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
">
          <img
            src="/pic3.jpg"
            alt="Biryani"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Biryani</h3>
          <p className="text-lg text-gray-700 mb-4">
            A fragrant and flavorful rice dish made with marinated meat, spices, and saffron, served with a side of raita or salad. A feast for your senses!
          </p>
        </div>

        {/* Recipe 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
">
          <img
            src="/pic2.jpg"
            alt="Spaghetti Carbonara"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Spaghetti Carbonara</h3>
          <p className="text-lg text-gray-700 mb-4">
            This classic Italian pasta dish features a creamy sauce made from eggs, cheese, and pancetta. It's quick, easy, and absolutely delicious.
          </p>
        </div>

        {/* Recipe 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
">
          <img
            src="/pic4.jpg"
            alt="Vegan Buddha Bowl"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Vegan Buddha Bowl</h3>
          <p className="text-lg text-gray-700 mb-4">
            A healthy and colorful vegan dish that combines a variety of fresh vegetables, quinoa, and a tangy dressing. It's filling and nutritious.
          </p>
        </div>

        {/* Recipe 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
">
          <img
            src="/pic5.jpg"
            alt="Chole Bhature"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Chole Bhature</h3>
          <p className="text-lg text-gray-700 mb-4">
            A popular North Indian dish of spicy chickpeas served with fluffy, deep-fried bread. Perfect for a hearty and flavorful meal.
          </p>
        </div>

        {/* Recipe 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
">
          <img
            src="/pic6.jpg"
            alt="Pizza"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Pizza</h3>
          <p className="text-lg text-gray-700 mb-4">
            A universally loved dish featuring a crisp crust, savory tomato sauce, melted cheese, and a variety of toppings to suit every taste.
          </p>
        </div>

        
        {/* Recipe 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out;
 ">
          <img
            src="/pic7.jpg"
            alt="Pancakes"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Pancakes</h3>
          <p className="text-lg text-gray-700 mb-4">
            Fluffy and golden pancakes topped with syrup, butter, and fresh fruits. A perfect breakfast delight that’s simple yet satisfying!
          </p>
        </div>
      </div>

      </div>
    // </div>
  );
};

export default FeaturedSection;
