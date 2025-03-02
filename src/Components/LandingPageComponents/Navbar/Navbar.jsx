import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { label: "Home", path: "/" },
    { label: "Solution", path: "/solution" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Services", path: "/services" },
  ];

  return (
    <nav className="w-full bg-black text-white">
      <div className="flex items-center justify-between md:justify-around py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <h1>Logo</h1>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none text-xl"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "✖" : "☰"}
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg">
          {navlinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.path}
                className="hover:text-gray-300 transition duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden h-full bg-black py-4 text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {navlinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className="block text-center py-2 text-lg hover:bg-gray-800 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
