import React from "react";
import { Link } from "react-router-dom";

function portfoliohover() {
  return (
    <div className="hover_container portfolio">
      <div className="arrow-up portfolio"></div>
      <div className="content">
        <div className="details-waper">
          <Link
            to="/portfolio-page/#Portfolio"
            className="content-details"
            onClick={() => document.getElementById("customFocus").focus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/Portfolio.svg"></img>
            </div>
            <h2>Portfolio</h2>
            <p>Explore our portfolio companies</p>
          </Link>
          <Link
            to="/portfolio-page/#Investment"
            className="content-details"
            onClick={() => document.getElementById("customFocus").focus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/investment.svg"></img>
            </div>
            <h2>Investment Categories</h2>
            <p>Explore the areas we invest in</p>
          </Link>
          <Link
            to="/portfolio-page/#Criteria"
            className="content-details"
            onClick={() => document.getElementById("customFocus").focus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/Criteria.svg"></img>
            </div>
            <h2>Criteria</h2>
            <p>Explore how we select our investments</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default portfoliohover;
