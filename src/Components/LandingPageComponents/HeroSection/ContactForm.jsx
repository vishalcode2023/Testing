import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-4xl font-bold mb-6">Keep in Touch</h2>

        <form className="bg-black p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-3 border-b-2 bg-transparent text-white outline-none focus:border-green-500"
              />
            </div>
            {/* Company */}
            <div>
              <label className="block text-lg font-semibold">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full mt-2 p-3 border-b-2 bg-transparent text-white outline-none focus:border-green-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 p-3 border-b-2 bg-transparent text-white outline-none focus:border-green-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-lg font-semibold">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full mt-2 p-3 border-b-2 bg-transparent text-white outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full mt-2 p-3 border-b-2 bg-transparent text-white outline-none h-32 focus:border-green-500"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="text-center mt-6">
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
