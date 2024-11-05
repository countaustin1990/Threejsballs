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
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        &#9662; {/* Down arrow icon */}
      </span>
    </motion.div>
    {isOpen && (
      <motion.div
        className="p-4 bg-gray-100"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-700">{content}</p>
      </motion.div>
    )}
  </div>
);

const JumbotronComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: 'What is MyPortfolio?',
      content: 'MyPortfolio is a platform to showcase your creative projects and style.',
    },
    {
      title: 'How do I get started?',
      content: 'You can get started by creating an account and filling out your profile.',
    },
    {
      title: 'What services do you offer?',
      content: 'We offer tailored clothing designs, custom accessories, and more.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-yellow-500 py-5 md:py-24 w-lg rounded-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4">
          Welcome to MyPortfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Crafting Your Style, One Stitch at a Time
        </p>
        <div className="w-full max-w-md mx-auto text-gray-200">
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
