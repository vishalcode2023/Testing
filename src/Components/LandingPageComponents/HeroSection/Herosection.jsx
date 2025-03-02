import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center bg-black text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Section (Text Content) */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:text-left py-10 md:px-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Sorting Evolved Smarter, <span className="text-green-400">Faster</span>, Greener
          </h1>
          <p className="text-lg mt-4">
            Our high-tech sorting solutions maximize accuracy, reduce waste, and drive sustainability, redefining how businesses optimize their operations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <motion.button
              className="bg-[#017359] text-white px-8 py-3 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Products Catalog
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section (Images) */}
        <motion.div
          className="w-full md:w-1/2 md:h-screen py-10"
        >
          <div className="flex md:gap-5 gap-2">
            <motion.div className="md:w-96 md:h-80 w-96 h-60" whileHover={{ scale: 1.05 }}>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
            <motion.div className="md:w-60 md:h-80 w-60 h-60" whileHover={{ scale: 1.05 }}>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1501113287220-55fa37ce44db?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
          </div>
          <div className="md:flex md:gap-5 gap-2">
            <motion.div className="md:w-[35%] my-5 md:h-80 w-[100%] h-60" whileHover={{ scale: 1.05 }}>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1544509490-234516547bf0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
            <motion.div className="w-[52%] my-5 md:h-80 hidden md:block" whileHover={{ scale: 1.05 }}>
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Herosection;
