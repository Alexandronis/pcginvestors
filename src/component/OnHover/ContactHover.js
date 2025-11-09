import React from "react";
import { Link } from "react-router-dom";

function ContactHover() {
  return (
    <div className="hover_container contact">
      <div className="arrow-up contact"></div>
      <div className="content">
        <div className="details-waper">
          <Link
            to="/contact/#ContactUs"
            className="content-details"
            onClick={() => document.getElementById("customFocus").focus}
          >
            <div className="img-box">
              <img src="/Nav_hover_img/contact.svg" alt="Contact" />
            </div>

            <h2>Contact</h2>
            <p>Let&apos;s talk business</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactHover;
