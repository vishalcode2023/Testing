import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import ContactForm from "../LandingPageComponents/HeroSection/ContactForm";
import Footer from "../LandingPageComponents/HeroSection/Footer";

export default function ContactUs() {
  return (
    <div className="bg-black w-full min-h-screen text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-300">Do you have any questions? Feel free to contact us.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Service */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Service</h3>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaEnvelope className="text-green-400" /> service@Test-corp.eu
          </p>
        </div>

        {/* Sales Center */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Sales Center</h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center gap-2"><FaEnvelope className="text-green-400" /> sales@Test-corp.eu</p>
            <p className="flex items-center gap-2"><FaPhone className="text-blue-400" /> +421 948 209 976</p>
            <p className="flex items-center gap-2 text-green-400"><FaClock /> Mon-Fri: 8:00 - 17:00</p>
          </div>
        </div>

        {/* Test Center */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Test Center</h3>
          <p className="flex items-center gap-2 mt-2 text-gray-300">
            <FaMapMarkerAlt className="text-red-400" /> 23 Palacowa St., 05-816 Michalowice, Poland
          </p>
          <p className="text-gray-400 text-sm">(15 minutes from Chopin international airport)</p>
        </div>

        {/* Company */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Company</h3>
          <div className="text-gray-300 space-y-1">
            <p>MEYER Europe s.r.o.</p>
            <p>Nam. L. Novomeskeho 1 040 01, Kosice, Slovakia</p>
            <p>VAT number: SK2120934750</p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <ContactForm />
      <Footer />
    </div>
  );
}
