import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="text-black text-center py-20"
      style={{
        backgroundImage: "url('/pic1.jpg')", // Path to your image
        backgroundSize: 'cover', // Ensures the image covers the section area
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        height: '70vh', // Use viewport height for responsiveness
        minHeight: '520px', // Minimum height for larger screens
        width: '100%', // Ensure it takes the full width
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-[#262626 ]">Welcome to Heerlicious</h1>
      <p className="text-xl mb-6 text-[#91710a] font-semibold">Discover the secret ingredients to mouthwatering dishes.</p>
      <Link to="/recipes">
        <button className="bg-[#262626] text-white py-2 px-6 rounded hover:bg-[#7AA93C] transition duration-200">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
