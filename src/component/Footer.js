import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <div>
      <footer>
        <div className="footer-top">
          <img src="/logo_transparent.svg" alt="PCG White Logo" />
          <div className="line"></div>
        </div>
        <div className="footer-center">
          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  PO Box 7,
                  <br></br>Los Gatos,
                  <br></br>CA 95031
                </p>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <p>408.483.5566</p>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:info@pcg-investors.com">
                    info@pcg-investors.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about#about-pcg"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio-page/#Portfolio"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/#ContactUs"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Partnership-Capital-Growth-428884540458567"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className=""
                    src="/facebook_icon.svg"
                    alt="Facebook Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pcg_investors/"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className=""
                    src="/instagram_icon.svg"
                    alt="Instagram Icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/PCG_Investors" target="_blank" rel="noreferrer">
                  <img
                    className=""
                    src="/twitter_icon.svg"
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/partnership-capital-growth"
                  target="_blank" rel="noreferrer"
                >
                  <img
                    className=""
                    src="/linkedin_icon.svg"
                    alt="Linkedin Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="cert">
            <img
              className="b_logo_containar"
              src="/b_certified.svg"
              alt="B Certified Logo"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {date} Partnership Capital Growth, LLC All Rights
            Reserved
          </p>
        </div>
      </footer>
      {/* mobile viwe */}
      <div className="footer_mobile">
        <div className="footer-wrapper">
          <div className="menu">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about#about-pcg"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio-page/#Portfolio"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/#ContactUs"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </div>

        <div className="footer-center">
          <div className="cert">
            <img
              className="b_logo_containar"
              src="/b_certified.svg"
              alt="B Certified Logo"
            />
          </div>

          <div className="footer-top">
            <img src="/logo_transparent.svg" alt="PCG White Logo" />
            <div className="line"></div>
          </div>

          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  2 N Santa Cruz,
                  <br></br>Suite 201 Los Gatos,
                  <br></br>CA 95030
                </p>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <p>408.483.5566</p>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:info@pcg-investors.com">
                    info@pcg-investors.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Partnership-Capital-Growth-428884540458567"
                target="_blank" rel="noreferrer"
              >
                <img
                  className=""
                  src="/facebook_icon.svg"
                  alt="Facebook Icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pcg_investors/"
                target="_blank" rel="noreferrer"
              >
                <img
                  className=""
                  src="/instagram_icon.svg"
                  alt="Instagram Icon"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PCG_Investors" target="_blank" rel="noreferrer">
                <img className="" src="/twitter_icon.svg" alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/partnership-capital-growth"
                target="_blank" rel="noreferrer"
              >
                <img
                  className=""
                  src="/linkedin_icon.svg"
                  alt="Linkedin Icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {date} Partnership Capital Growth, LLC All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
