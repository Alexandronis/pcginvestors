import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageLoader from "./components/layout/PageLoader";
import NotFoundPage from "./404";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const PortfolioPage = lazy(() => import("./components/pages/Portfolio"));
const ClientPage = lazy(() => import("./components/pages/Client"));

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
