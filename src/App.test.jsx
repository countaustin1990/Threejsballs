// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; // Import additional pages as needed
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/footercomponent/FooterComponent";
import Projects from "./pages/Projects";
import React, { useState, useEffect } from 'react';
import DiscountAlert from "./components/discountalert/DiscountAlert";
import BackToTopButton from "./components/backtotopbutton/BackToTopButton";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle closing the alert
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    // Show the discount alert 3 seconds after loading the page
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <Router>
      <div>
        <BackToTopButton/>
        {showAlert && <DiscountAlert offer={20} onClose={handleCloseAlert} />}
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more routes as needed */}
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
