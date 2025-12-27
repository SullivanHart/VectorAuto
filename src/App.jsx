import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Directions from "./pages/Directions.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Testimonials from "./pages/Testimonials.jsx";

export default function App() {
  return (
    <div className="site-wrap cfix min-h-screen flex flex-col">
      <Header />
      <main className="min-h-screen bg-sage p-4">
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}