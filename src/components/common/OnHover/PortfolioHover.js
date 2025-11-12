import React from "react";
import { Link } from "react-router-dom";

const PortfolioHover = () => {
  const handleFocus = () => {
    const element = document.getElementById("customFocus");
    if (element) element.focus();
  };

  return (
    <div className="hover_container portfolio">
      <div className="arrow-up portfolio"></div>
      <div className="content">
        <div className="details-waper">
          <Link
            to="/portfolio-page/#Portfolio"
            className="content-details"
            onClick={handleFocus}
          >
            <div className="img-box">
              <img
                src="/Nav_hover_img/Portfolio.svg"
                alt="Portfolio"
                loading="lazy"
              />
            </div>
            <h2>Portfolio</h2>
            <p>Explore our portfolio companies</p>
          </Link>

          <Link
            to="/portfolio-page/#Investment"
            className="content-details"
            onClick={handleFocus}
          >
            <div className="img-box">
              <img
                src="/Nav_hover_img/investment.svg"
                alt="Investment"
                loading="lazy"
              />
            </div>
            <h2>Investment Categories</h2>
            <p>Explore the areas we invest in</p>
          </Link>

          <Link
            to="/portfolio-page/#Criteria"
            className="content-details"
            onClick={handleFocus}
          >
            <div className="img-box">
              <img
                src="/Nav_hover_img/Criteria.svg"
                alt="Criteria"
                loading="lazy"
              />
            </div>
            <h2>Criteria</h2>
            <p>Explore how we select our investments</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHover;
