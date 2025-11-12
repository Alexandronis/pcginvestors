import React from "react";
import { Link } from "react-router-dom";

const TeamHover = () => {
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
            to="/about/#our-team"
            className="content-details"
            onClick={handleFocus}
          >
            <div className="img-box">
              <img
                src="/Nav_hover_img/pcg_team.svg"
                alt="Team"
                loading="lazy"
              />
            </div>
            <h2>PCG TEAM</h2>
            <p>
              Our team of investment professionals dedicated to your success
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamHover;
