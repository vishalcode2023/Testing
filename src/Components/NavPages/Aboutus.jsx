import React from 'react'
import ContactForm from '../LandingPageComponents/HeroSection/ContactForm';
import Footer from '../LandingPageComponents/HeroSection/Footer';

const Aboutus = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 md:p-10">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        Sorting Creates Values
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl">
        {/* Left Section - Stats */}
        <div className="w-full md:w-1/2 p-6 md:p-10 text-2xl md:text-3xl font-bold space-y-6 text-center md:text-left">
          <h2>
            30+ <span className="text-green-300">Years</span> of experience
          </h2>
          <h2>
            100+ <span className="text-green-300">Countries</span> with our
            products
          </h2>
          <h2>
            60,000+ <span className="text-green-300">World-changing</span>{" "}
            customers
          </h2>
        </div>

        {/* Right Section - Info Box */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-6 md:p-8 rounded-lg max-w-md text-lg  text-white text-center md:text-left">
            <p>
              We are a leading manufacturer of advanced optical and color
              sorting solutions for the recycling and food industries. Our
              expertise helps customers choose the right solution, with a wide
              range of high-quality sorters, professional installation, and
              dedicated support at every stage.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-[#017359] font-semibold rounded-md">
              About Us &gt;
            </button>
          </div>
        </div>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Aboutus