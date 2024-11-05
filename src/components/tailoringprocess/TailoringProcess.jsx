// TailoringProcess.jsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Consultation", description: "Meet with the tailor to discuss your design." },
  { title: "Measurements", description: "Precise measurements are taken." },
  { title: "Cutting and Sewing", description: "The fabric is cut and sewn." },
  { title: "Final Fitting", description: "A final fitting ensures the perfect fit." },
];

export default function TailoringProcess() {
  return (
    <div className="relative w-full">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="font-bold text-lg">{step.title}</h3>
          <p>{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
