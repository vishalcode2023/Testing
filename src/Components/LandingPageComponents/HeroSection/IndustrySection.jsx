import React from "react";

const industries = [
  {
    id: 1,
    title: "Recycling Industry",
    description:
      "Discover how AI technology is transforming recycling efficiency, ensuring a greener planet with smarter sorting solutions.",
    image: "https://unsplash.com/photos/sprite-plastic-bottle-on-table--2lJGRIY5P0",
    videoUrl: "Videos/3196599-uhd_2560_1440_25fps.mp4",
    alt: "AI-powered Recycling Process",
  },
  {
    id: 2,
    title: "Food Processing",
    description:
      "Our AI-powered food sorting solutions ensure quality and efficiency in food processing, reducing waste and optimizing production.",
    image: "https://imgs.search.brave.com/btFXiDyanLv6156ymrliy_C2u6uyDcrju2SIpSTErM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWJlZi5vcmcvdXBs/b2Fkcy9ibG9nLzE3/NDAwMjMzMTFfMmUw/NjlhY2RjY2QxMzM4/NGI1ZjMucG5n",
    videoUrl: "Videos/5608087-uhd_3840_2160_24fps.mp4",
    alt: "Food sorting automation using AI",
  },
  {
    id: 3,
    title: "Agriculture",
    description:
      "Advance your agricultural practices with Meyer's state-of-the-art optical sorters! Learn how our AI-enhanced solutions can drastically improve your crop sorting efficiency, ensuring only the best produce reaches the market. By partnering with us, you benefit from not just groundbreaking technology but also from our free after-sales service, guaranteeing your operations continue to thrive",
    image: "https://via.placeholder.com/400",
    videoUrl: "Videos/2876087-hd_1920_1080_30fps.mp4",
    alt: "AI-powered Agriculture Sorting Process",
  },
];

const IndustrySection = () => {
  return (
    <section className="bg-black text-white py-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Make an Impact on These Industries with Us
        </h1>
        <p className="mt-2 text-lg">
          Discover AI-powered solutions for various industries.
        </p>
      </header>

      <div className="max-w-6xl mx-auto space-y-12">
        {industries.map((industry, index) => (
          <article
            key={industry.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold mb-4">{industry.title}</h2>
              <p className="text-lg mb-4">{industry.description}</p>
              <a
                href="#"
                className="text-yellow-400 font-semibold"
                aria-label={`Read more about ${industry.title}`}
              >
                Read more &gt;
              </a>
            </div>

            {/* Video/Image Section */}
            <div className="md:w-1/2 p-6 flex justify-center">
              <video muted autoPlay
                className="w-full h-64 md:h-80 rounded-lg"
                src={industry.videoUrl}
                title={industry.title}
                allowFullScreen
              ></video>
            </div>
          </article>
        ))}
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AI-Powered Industrial Solutions",
          "description":
            "Discover AI-powered solutions for recycling, food processing, and mining industries, enhancing efficiency and sustainability.",
          "publisher": {
            "@type": "Organization",
            "name": "Your Company Name",
          },
        })}
      </script>
    </section>
  );
};

export default IndustrySection;
