// DiscountAlert.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DiscountAlert = ({ offer, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <motion.div
        className="bg-white p-10 md:p-16 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500">
          {offer}% Off on All Revamped Items!
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">
          Limited-time offer on all items! Don’t miss out on amazing savings.
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition duration-300"
          onClick={onClose}
        >
          Claim Offer
        </button>
      </motion.div>
    </div>
  );
};

export default DiscountAlert;
