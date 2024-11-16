// DiscountAlert.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon from react-icons

const DiscountAlert = ({ offer, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-r from-blue-500/30 to-yellow-400/50">
      <motion.div
        className="relative bg-white/90 p-10 md:p-16 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          onClick={onClose}
          aria-label="Close alert"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Offer Content */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-950">
          {offer}% Off on All Revamped Items!
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">
          Limited-time offer on all items! Don’t miss out on amazing savings.
        </p>
        <button
          className="bg-purple-800 hover:bg-purple-500 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition duration-300"
          onClick={onClose}
        >
          Claim Offer
        </button>
      </motion.div>
    </div>
  );
};

export default DiscountAlert;
