import React from "react";
import Navbar from "../components1/Navbar";
import HeroSection from "../components1/HeroSection";
import FeaturedSection from "../components1/FeaturedSection";
import ReviewSection from "../components1/ReviewSection";
import Footer from "../components1/Footer";
import SocialShareSection from "../components1/SocialShareSection";
import TasteOfFood from "../components1/TasteOfFood";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <TasteOfFood />
      <SocialShareSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;

