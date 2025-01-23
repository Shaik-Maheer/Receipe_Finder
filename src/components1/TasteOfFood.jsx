import React from 'react';
import { Link } from 'react-router-dom';

const TasteOfFood = () => {

  return (
    <div className="taste-of-food py-20 px-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-3xl font-bold mb-6 text-[#7AA93C] text-center">Savor the Best of Heerlicious Flavors!</h2>
      <div className="food-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="food-item p-4 bg-[#F7F7F7] rounded-md shadow-md">
          <img src="/eat1.jpg" alt="Salad" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-[#7AA93C] font-semibold">Healthy Salad</h3>
          <p>Fresh greens and veggies, topped with a zesty dressing.</p>
        </div>
        <div className="food-item p-4 bg-[#F7F7F7] rounded-md shadow-md">
          <img src="/eat2.jpg" alt="Cake" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-[#7AA93C] font-semibold">Chocolate Cake</h3>
          <p>A rich and indulgent chocolate treat to satisfy your sweet tooth.</p>
        </div>
        <div className="food-item p-4 bg-[#F7F7F7] rounded-md shadow-md">
          <img src="/eat3.jpg" alt="Burger" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-[#7AA93C] font-semibold">Gourmet Burger</h3>
          <p>A juicy burger with premium ingredients, perfect for every craving.</p>
        </div>
        <div className="food-item p-4 bg-[#F7F7F7] rounded-md shadow-md">
          <img src="/eat4.jpg" alt="Ice Cream" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-[#7AA93C] font-semibold">Vanilla Ice Cream</h3>
          <p>A classic dessert with a smooth, creamy flavor that melts in your mouth.</p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/recipes" className="read-more-btn text-[#7AA93C] font-bold border-2 border-[#7AA93C] py-2 px-6 rounded-md hover:bg-[#7AA93C] hover:text-white transition duration-300">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default TasteOfFood;

