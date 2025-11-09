import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";

import About from "./component/about";
import Home from "./component/home";
import Contact from "./component/contact";
import PortfolioPage from "./component/portfolioPage";
import ClientPage from "./component/clientPage";
import Header from "./component/header";
import NotFoundPage from "./404";
import Footer from "./component/footer";

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
