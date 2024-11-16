import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-5 font-bold rounded-full backdrop-blur-sm bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-400 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
