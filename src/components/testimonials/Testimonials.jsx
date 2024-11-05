// Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { client: "Alice", review: "Fantastic tailoring service!" },
    { client: "Bob", review: "High-quality fabrics and great fit!" },
    { client: "Charlie", review: "Exceeded my expectations!" },
  ];

  return (
    <motion.div
      className="text-center p-4 shadow-lg rounded-lg"
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg">{testimonial.client}</h3>
          <p className="text-gray-600">{testimonial.review}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Testimonials;
