import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/GoMyTeam/" element={<Home />} />
        <Route path="/GoMyTeam/about" element={<About />} />
        <Route path="/GoMyTeam/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}
