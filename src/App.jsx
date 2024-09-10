import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Carinfo from "./components/Carinfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info/:car" element={<Carinfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
