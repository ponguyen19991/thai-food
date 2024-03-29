import React, { lazy, useEffect, useState } from "react";
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Restaurants from "./pages/Restaurants"
import Today from "./pages/Today"
import Reviews from "./pages/Reviews"
import About from "./pages/About"
import Menu from "./pages/Menu"
import AOS from 'aos';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import ScrollPrompt from "./components/ScrollPrompt/ScrollPrompt";

// const Home = lazy(() =>
//   new Promise((resolve) => setTimeout(() => resolve(import("./pages/Home")), 5000))
// );

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { t, i18n } = useTranslation();


  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const delay = Math.random() * 4000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="overlay"></div>
        <div className="loading-container">
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
          <span className="loading-circle"></span>
        </div>
      </div>
    );
  }

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage); // Lưu giá trị vào localStorage
  }
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/today" element={<Today />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <ScrollPrompt />
      <LanguageSelect selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
    </React.Fragment>
  );
}

export default App;
