// ContactCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <motion.button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      whileHover={{ scale: 1.1 }}
    >
      Book an Appointment
    </motion.button>
  );
}
