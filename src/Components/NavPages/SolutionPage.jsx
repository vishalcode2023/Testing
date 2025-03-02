import React from "react";
import { CheckCircle, XCircle, Download } from "lucide-react";
import ContactForm from '../LandingPageComponents/HeroSection/ContactForm';
import Footer from '../LandingPageComponents/HeroSection/Footer';

const SolutionPage = () => {
  const recyclingData = [
    {
      title: "INPUT",
      bgColor: "bg-gray-900",
      icon: <Download className="text-white" size={24} />,
      image: "https://meyer-corp.eu/wp-content/uploads/2024/05/sorting-material-HDPE-input.webp", // Ensure correct path
    },
    {
      title: "ACCEPT",
      bgColor: "bg-green-800",
      icon: <CheckCircle className="text-white" size={24} />,
      image: "https://meyer-corp.eu/wp-content/uploads/2024/05/sorting-material-HDPE-accept.webp", // Ensure correct path
    },
    {
      title: "REJECT",
      bgColor: "bg-red-700",
      icon: <XCircle className="text-white" size={24} />,
      image: "https://meyer-corp.eu/wp-content/uploads/2024/05/sorting-material-HDPE-reject.webp", // Ensure correct path
    },
  ];

  return (
    <div className="w-full h-full bg-black">
      {/* Section with Background Gradient */}
      <section className=" text-white py-12 px-4">
        {/* Title & Subtitle */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Optical Sorting in Recycling
          </h1>
          <p className="text-lg mt-2">
            Optical sorting of recycling materials is crucial not only for consumers 
            but also for suppliers whose products undergo rigorous quality checks.
          </p>
        </div>

        {/* Embedded Video */}
        <div className="flex justify-center mt-6">
          <video
            muted
            autoPlay
            loop
            className="w-full max-w-2xl aspect-video rounded-lg shadow-lg"
            src="Videos/3196638-uhd_3840_2160_25fps.mp4" // Ensure correct path
          ></video>
        </div>
      </section>

      {/* Recycling Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {recyclingData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-lg shadow-lg w-72 text-white overflow-hidden`}
          >
            {/* Icon and Title */}
            <div className="flex flex-col items-center py-4">
              {item.icon}
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            </div>

            {/* Image */}
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
          </div>
        ))}
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default SolutionPage;
