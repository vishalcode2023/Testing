import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Test Center */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Test Center</h3>
          <p>Test Center 23 Palacowa St., Hall</p>
          <p>E+/25, 05-816 Michalowice, Poland</p>
        </div>

        {/* Contact */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +421 948 209 976</p>
          <p>Address: Kosice, Slovakia</p>
        </div>

        {/* Sitemap */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Sitemap</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/solution" className="hover:text-gray-400">
                Solution
              </Link>
            </li>
            <li>
              <Link to="/test-center" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                Servies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo & Languages */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">Your Brand</h3>
          <p className="mt-2">EN | PL | HU</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
