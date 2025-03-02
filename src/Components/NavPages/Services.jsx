import React from "react";
import { FaTools, FaQuestionCircle, FaHandshake, FaHeadset, FaHardHat, FaCogs, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";
import ContactForm from '../LandingPageComponents/HeroSection/ContactForm';
import Footer from '../LandingPageComponents/HeroSection/Footer';

const Services = () => {
  const services = [
    {
      title: "Pre-Sale",
      icon: <FaHandshake className="text-5xl text-teal-400" />,
      points: [
        "Consulting Solution Service",
        "Configuration Suggestion",
        "Layout Suggestion",
      ],
    },
    {
      title: "Help Desk",
      icon: <FaHeadset className="text-5xl text-teal-400" />,
      points: [
        "Remote troubleshooting",
        "Remote machine adjusting",
        "Faulty escalation",
      ],
    },
    {
      title: "On-Site",
      icon: <FaHardHat className="text-5xl text-teal-400" />,
      points: ["Routing inspection", "Commissioning", "Troubleshooting", "Recovery"],
    },
    {
      title: "Spare Parts",
      icon: <FaCogs className="text-5xl text-teal-400" />,
      points: [
        "Risky spare parts supply",
        "Warranty service",
        "Key parts maintenance",
        "Over warranty spare parts",
      ],
    },
    {
      title: "Training",
      icon: <FaChalkboardTeacher className="text-5xl text-teal-400" />,
      points: ["Local training", "High-level headquarters"],
    },
    {
      title: "Warranty",
      icon: <FaShieldAlt className="text-5xl text-teal-400" />,
      points: ["Standard warranty", "Long-term warranty", "SLA", "Over warranty"],
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center">Service & Support</h1>
      <p className="text-center text-gray-300 mt-2">
        We provide complex services across optical sorting solutions
      </p>

      {/* Grid Layout for Selection Support */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        {/* Product Selection Support */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-start">
          <FaQuestionCircle className="text-5xl text-teal-400 mb-4" />
          <h2 className="text-2xl font-bold">Product Selection Support</h2>
          <p className="text-gray-300 mt-2">
            When you think about buying a MEYER machine, you can lean on our
            support since the first day of cooperation. Our experts help you
            choose the best machines, identifying customer needs and problems.
          </p>
        </div>

        {/* Installation & Start-up */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-start">
          <FaTools className="text-5xl text-teal-400 mb-4" />
          <h2 className="text-2xl font-bold">Installation & Start-up</h2>
          <p className="text-gray-300 mt-2">
            Practical knowledge and professional assistance during the
            selection, installation, and commissioning of machines ensure
            maximum benefits from the operation of your device.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {services.map((service, index) => (
          <div key={index} className="bg-gradient-to-b from-green-900 to-black p-6 rounded-lg shadow-lg">
            {service.icon}
            <h2 className="text-2xl font-bold mt-3">{service.title}</h2>
            <ul className="mt-2 text-gray-300">
              {service.points.map((point, i) => (
                <li key={i} className="mt-1">• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pre-Sale & After-Sale Service Section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold">Pre-Sale Service</h2>
        <p className="text-gray-300 mt-2">
          We are committed to providing you with comprehensive information
          about our color sorter, ensuring it meets your unique needs based on
          your specific circumstances.
        </p>

        <h2 className="text-3xl font-bold mt-10">After-Sale Service</h2>
        <ul className="text-gray-300 mt-2 text-left inline-block">
          <li>• Experience our 24-hour on-site service with fast response and thoughtful consideration.</li>
          <li>• Enjoy a two-year warranty with complimentary maintenance.</li>
          <li>• Benefit from our 24/7 free consultation service.</li>
          <li>• Gain peace of mind with our user file creation and dedicated tracking services.</li>
        </ul>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Services;
