// AccordionComponent.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const AccordionItem = ({ title, content, isOpen, toggle }) => (
  <div className="border-b border-gray-300">
    <motion.div
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={toggle}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        &#9662; {/* Down arrow icon */}
      </span>
    </motion.div>
    {isOpen && (
      <motion.div
        className="p-4 bg-blue-950"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="bg-blue-950 text-gray-200">{content}</p>
      </motion.div>
    )}
  </div>
);

const JumbotronComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: 'Why choose DFashion?',
      content: 'DFashion is a platform to showcase our creative products and services. Standing a chance to earn with us',
    },
    {
      title: 'What services do you offer?',
      content: 'We offer tailored clothing designs, custom accessories, and more.',
    },
    {
      title: 'How do I get started?',
      content: 'You can get started by creating an account and filling out your profile.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 text-white py-5 md:py-24 w-lg rounded-lg blur-5">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold text-gray-200 mb-4">
          Our Aim And Objective
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Crafting Your Style, One Stitch at a Time
        </p>
        <div className="w-full max-w-sm mx-auto text-gray-200">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              toggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JumbotronComponent;
