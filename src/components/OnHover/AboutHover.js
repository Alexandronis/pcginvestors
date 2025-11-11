import React from "react";
import { Link } from "react-router-dom";

const AboutHover = () => {
  const handleFocus = () => {
    const element = document.getElementById("customFocus");
    if (element) element.focus();
  };

  return (
    <div className="hover_container about">
      <div className="arrow-up about"></div>
      <div className="content">
        <div className="details-waper">
          <Link
            to="/about/#about-pcg"
            className="content-details"
            onClick={handleFocus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/about_pcg.svg" alt="About" loading="lazy" />
            </div>
            <h2>ABOUT PCG</h2>
            <p>Explore who we are - our mission, values, and principles</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHover;
