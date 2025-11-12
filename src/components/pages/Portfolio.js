import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollHandler from "../common/ScrollHandler";
import { PortfolioCriteria, PortfolioInvestment, PortfolioSection } from "../common/Portfolio";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();

  const portfolioRef = useRef(null);
  const investmentRef = useRef(null);
  const criteriaRef = useRef(null);

  // Add inner-header class once
  useEffect(() => {
    if (location.pathname === "/portfolio-page" || location.pathname === "/portfolio-page/") {
      document.body.classList.add("inner-header");
      localStorage.setItem("activePage", "portfolio");
    }
  }, [location.pathname]);

  // Scroll to section on hash change
  useEffect(() => {
    const scrollOffset = 100;
    const scrollToRef = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView();
        window.scrollTo(0, window.scrollY - scrollOffset);
      }
    };

    if (location.hash === "#Portfolio") scrollToRef(portfolioRef);
    if (location.hash === "#Investment") scrollToRef(investmentRef);
    if (location.hash === "#Criteria") scrollToRef(criteriaRef);
    if (location.hash.includes("section")) {
      setTimeout(() => window.scrollTo(0, window.scrollY - scrollOffset));
    }
  }, [location.hash]);

  return (
    <div>
      <Helmet>
        <title>
          PCG Investment portfolio in fitness & health, wellness & lifestyle
        </title>
        <meta
          name="description"
          content="PCG portfolio companies are: Numi Tea, Rudy's, Surftech, Anytime Fitness, Califia Farms, The Alaska Club, Designer Wellness, Dryabar, Cytosport, Gaia Herbs, and Ragnar"
        />
      </Helmet>
      <link
        rel="canonical"
        href="https://www.pcginvestors.com/portfolio-page"
      />
      <div className="inner-page-wrapper portfoilo-wrapper">
        <ScrollHandler />
        <div className="page-block-portfolio">
          <div className="switch-lable">
            <ul>
              <li className={location.hash === "#Portfolio" || location.hash === "" ? "active-tab" : "disable-tab"}>
                <Link
                  to="/portfolio-page/#Portfolio"
                  onClick={() => navigate("/portfolio-page/#Portfolio", { replace: true })}
                >
                  Portfolio
                </Link>
              </li>
              <li className={location.hash === "#Investment" ? "active-tab" : "disable-tab"}>
                <Link
                  to="/portfolio-page/#Investment"
                  onClick={() => navigate("/portfolio-page/#Investment", { replace: true })}
                >
                  Investment
                </Link>
              </li>
              <li className={location.hash === "#Criteria" ? "active-tab" : "disable-tab"}>
                <Link
                  to="/portfolio-page/#Criteria"
                  onClick={() => navigate("/portfolio-page/#Criteria", { replace: true })}
                >
                  Criteria
                </Link>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <PortfolioSection location={location} sectionRef={portfolioRef} />
          <PortfolioInvestment location={location} sectionRef={investmentRef} />
          <PortfolioCriteria location={location} sectionRef={criteriaRef} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
