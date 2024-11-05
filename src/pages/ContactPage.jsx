// ContactComponent.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-400 mt-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>
      {/*test start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-8">
        <div className="flex flex-col items-center p-6 cursor-pointer">
          <FaPhone className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className='text-gray-500'>+1 (555) 123-4567</p>
        </div>
        <div className="flex flex-col items-center p-6 cursor-pointer">
          <FaEnvelope className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-500">contact@fashionbrand.com</p>
        </div>
        <div className="flex flex-col items-center p-6 cursor-pointer">
          <FaMapMarkerAlt className="text-3xl mb-2" />
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-500">123 Fashion Ave, New York, NY</p>
        </div>
      </div>

     

      {/*test end */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </motion.div>

        <button
          type="submit"
          className="w-full p-2 bg-green-500 hover:bg-green-600 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
