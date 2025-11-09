import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";

import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import PortfolioPage from "./component/PortfolioPage";
import ClientPage from "./component/ClientPage";
import Header from "./component/Header";
import NotFoundPage from "./404";
import Footer from "./component/Footer";

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
