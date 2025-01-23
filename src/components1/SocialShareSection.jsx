import React from "react";

const SocialShareSection = () => {
  return (
    <>
      <section
        className="share-meal-section py-20"
        style={{ backgroundColor: "#262626", color: "#FFFFFF" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#7AA93C] text-center">
          Show Off Your Delicious Creations!
        </h2>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Feeling proud of your cooking skills? 🥳 Share your yummy meals on
          Instagram with <strong>#HeerliciousCreations</strong>, and you could
          be crowned the <strong>Meal of the Month</strong>! 😋🎉 Plus, there’s
          a sweet reward waiting for you! What are you waiting for? Let’s make
          food fun and fabulous! 🌟
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food1.jpg"
              alt="Meal 1"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food2.jpg"
              alt="Meal 2"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food3.jpg"
              alt="Meal 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food4.jpg"
              alt="Meal 4"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food5.jpg"
              alt="Meal 5"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food6.jpg"
              alt="Meal 6"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food7.jpg"
              alt="Meal 7"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food8.jpg"
              alt="Meal 8"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="w-1/4 sm:w-1/6">
            <img
              src="/food9.jpg"
              alt="Meal 9"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialShareSection;
