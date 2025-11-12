import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollHandler from "./common/ScrollHandler";
import { PortfolioCriteria, PortfolioInvestment, PortfolioSection } from "./common/Portfolio";

function PortfolioPage() {
  const navigate = useNavigate();

  const Portfolio = useRef();
  const Investment = useRef();
  const Criteria = useRef();
  const Location = useLocation();

  if (Location.pathname === "/portfolio-page") {
    document.body.classList.add("inner-header");
  }

  useEffect(() => {
    if (Location.hash === "#Portfolio" && Portfolio.current) {
      Portfolio.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash === "#Investment" && Investment.current) {
      Investment.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash === "#Criteria" && Criteria.current) {
      Criteria.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash.includes("section")) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 100);
      });
    }
    if (Location.pathname === "/portfolio-page" && Portfolio.current) {
      Portfolio.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.pathname === "/portfolio-page/") {
      document.body.classList.add("inner-header");
    }
    if (Location.pathname === "/portfolio-page") {
      localStorage.setItem("activePage", "portfolio");
    }
  }, [Location]);

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
      ></link>
      <div className="inner-page-wrapper portfoilo-wrapper">
        <ScrollHandler />
        <div className="page-block-portfolio">
          <div className="switch-lable">
            <ul>
              <li
                className={
                  Location.hash === "#Portfolio" || Location.hash === ""
                    ? "active-tab"
                    : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Portfolio"
                  onClick={() =>
                    navigate("/portfolio-page/#Portfolio", { replace: true })
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li
                className={
                  Location.hash === "#Investment" ? "active-tab" : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Investment"
                  onClick={() =>
                    navigate("/portfolio-page/#Investment", { replace: true })
                  }
                >
                  Investment
                </Link>
              </li>
              <li
                className={
                  Location.hash === "#Criteria" ? "active-tab" : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Criteria"
                  onClick={() =>
                    navigate("/portfolio-page/#Criteria", { replace: true })
                  }
                >
                  Criteria
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* Section */}
            <PortfolioSection
              location={Location}
              sectionRef={el => {
                Portfolio.current = el;
              }}
            />
            {/* Investment */}
            <PortfolioInvestment
              location={Location}
              sectionRef={el => {
                Investment.current = el;
              }}
            />
            {/* Criteria */}
            <PortfolioCriteria
              location={Location}
              sectionRef={el => {
                Criteria.current = el;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
