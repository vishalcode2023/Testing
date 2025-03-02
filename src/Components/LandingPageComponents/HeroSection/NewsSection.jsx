import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    image: "https://meyer-corp.eu/wp-content/uploads/2025/02/60024f68-6f58-11ef-ab63-000000000000-4-kopia-300x300.webp", // Replace with actual image
    date: "12/02/2025",
    title: "Europe at PRSE 2025 – Visit Us at RAI Amsterdam",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1636920566353-7a07a5692266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGV4cG98ZW58MHx8MHx8fDA%3D", // Replace with actual image
    date: "16/01/2025",
    title: "Europe at AGROmashEXPO 2025",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tYXBueSUyMG1lZXRpbmdzJTIwZ3JvdXAlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", // Replace with actual image
    date: "30/09/2024",
    title: "Participate in SIAL Paris 2024",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        Check out Our latest news
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-gray-900 rounded-xl p-4 w-full md:w-[300px] shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-400">{news.date}</p>
              <h3 className="text-lg font-bold">{news.title}</h3>
              <a href={news.link} className="text-green-400 font-bold mt-3 inline-block">
                Read more &gt;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
