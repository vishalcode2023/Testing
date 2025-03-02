import React from "react";

const articles = [
  {
    id: 1,
    title: "What is aflatoxin, and how optical sorting can help to reduce infection?",
    image: "https://meyer-corp.eu/wp-content/uploads/2025/01/Alfatoxin3-225x300.webp", // Replace with actual image path
    link: "#",
  },
  {
    id: 2,
    title: "Sorting challenges of the Milling and Grain Processing Industry",
    image: "https://meyer-corp.eu/wp-content/uploads/2025/01/grain-thumbnail-300x225.webp", // Replace with actual image path
    link: "#",
  },
  {
    id: 3,
    title: "Exploring the Efficiency of Modern Optical Sorting Technologies",
    image: "https://images.unsplash.com/photo-1518164483967-d6d558aa44df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
    link: "/articles/modern-optical-sorting",
},

];

const ArticlesSection = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-6">
      {/* Title */}
      <h3 className="text-center text-sm text-gray-400">Latest Articles</h3>
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
        Check out Our latest articles
      </h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-400">Article</p>
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <a
                href={article.link}
                className="mt-2 inline-block text-green-300 font-semibold hover:underline"
              >
                Read more &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
