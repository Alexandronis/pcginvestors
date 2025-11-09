import React from "react";
import { Link } from "react-router-dom";

function AboutHover() {
  return (
    <div className="hover_container about">
      <div className="arrow-up about"></div>
      <div className="content">
        <div className="details-waper">
          <Link
            to="/about/#about-pcg"
            className="content-details"
            onClick={() => document.getElementById("customFocus").focus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/about_pcg.svg" alt="About" />
            </div>
            <h2>ABOUT PCG</h2>
            <p>Explore who we are - our mission, values, and principles</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutHover;
