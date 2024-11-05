// MeetTheTailors.jsx
import React from 'react';
import { motion } from 'framer-motion';

const tailors = [
  { name: "John Doe", expertise: "Suit Specialist" },
  { name: "Jane Smith", expertise: "Wedding Dress Designer" },
];

export default function MeetTheTailors() {
  return (
    <div className="flex space-x-4">
      {tailors.map((tailor, index) => (
        <motion.div
          key={index}
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="p-4 shadow-md rounded-md"
        >
          <h3 className="font-bold">{tailor.name}</h3>
          <p>{tailor.expertise}</p>
        </motion.div>
      ))}
    </div>
  );
}
