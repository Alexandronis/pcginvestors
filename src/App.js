import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import NotFoundPage from "./404";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const PortfolioPage = lazy(() => import("./components/PortfolioPage"));
const ClientPage = lazy(() => import("./components/ClientPage"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio-page" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-page" element={<ClientPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
