import React, { useState, useEffect } from "react";
import LoadingAnimation from "../Components/Loading/LoadingAnimation";
import Navbar from "./LandingPageComponents/Navbar/Navbar";
import Herosection from "./LandingPageComponents/HeroSection/Herosection";
import NewsSection from "./LandingPageComponents/HeroSection/NewsSection";
import IndustrySection from "./LandingPageComponents/HeroSection/IndustrySection";
import SortingCreates from "./LandingPageComponents/HeroSection/SortingCreates";
import ArticlesSection from "./LandingPageComponents/HeroSection/ArticlesSection";
import ContactForm from "./LandingPageComponents/HeroSection/ContactForm";
import Footer from './LandingPageComponents/HeroSection/Footer'

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading && <LoadingAnimation />}
      <Navbar/>
      <Herosection/>
      <NewsSection/>
      <IndustrySection/>
      <SortingCreates/>
      <ArticlesSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
