import React from "react";
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Restaurants from "./pages/Restaurants"
import Today from "./pages/Today"
import Contact from "./pages/Contact"
import About from "./pages/About"
import HowWeWork from "./pages/HowWeWork"

function App() {
  return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/today" element={<Today />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
        </Routes>
      </React.Fragment>
  );
}

export default App;
