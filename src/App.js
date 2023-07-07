import React, { useEffect, useState } from "react";
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Restaurants from "./pages/Restaurants"
import Today from "./pages/Today"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Menu from "./pages/Menu"
import { useTranslation } from "react-i18next";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import ScrollPrompt from "./components/ScrollPrompt/ScrollPrompt";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const { t, i18n } = useTranslation();


  useEffect(() => {
    // Lấy giá trị đã lưu trong localStorage nếu có
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

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
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <ScrollPrompt/>
        <LanguageSelect selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </React.Fragment>
  );
}

export default App;
