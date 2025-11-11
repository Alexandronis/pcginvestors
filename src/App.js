import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";

import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import PortfolioPage from "./components/PortfolioPage";
import ClientPage from "./components/ClientPage";
import Header from "./components/Header";
import NotFoundPage from "./404";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio-page" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-page" element={<ClientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
