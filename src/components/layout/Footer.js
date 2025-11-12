import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="footer-top">
          <img
            src="/logo_transparent.svg"
            alt="PCG White Logo"
            loading="lazy"
          />
          <div className="line"></div>
        </div>

        <div className="footer-center">
          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  PO Box 7,
                  <br />
                  Los Gatos,
                  <br />
                  CA 95031
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
                <a href="/" onClick={resetDropdown}>
                  Home
                </a>
              </li>
              <li>
                <Link to="/about#about-pcg" onClick={resetDropdown}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio-page/#Portfolio" onClick={resetDropdown}>
                  Investments
                </Link>
              </li>
              <li>
                <Link to="/contact/#ContactUs" onClick={resetDropdown}>
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
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/facebook_icon.svg"
                    alt="Facebook Icon"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pcg_investors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/instagram_icon.svg"
                    alt="Instagram Icon"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PCG_Investors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/twitter_icon.svg"
                    alt="Twitter Icon"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/partnership-capital-growth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/linkedin_icon.svg"
                    alt="Linkedin Icon"
                    loading="lazy"
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
              loading="lazy"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {currentYear} Partnership Capital Growth, LLC All
            Rights Reserved
          </p>
        </div>
      </footer>

      {/* Mobile View */}
      <div className="footer_mobile">
        <div className="footer-wrapper">
          <div className="menu">
            <ul>
              <li>
                <a href="/" onClick={resetDropdown}>
                  Home
                </a>
              </li>
              <li>
                <Link to="/about#about-pcg" onClick={resetDropdown}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio-page/#Portfolio" onClick={resetDropdown}>
                  Investments
                </Link>
              </li>
              <li>
                <Link to="/contact/#ContactUs" onClick={resetDropdown}>
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
              loading="lazy"
            />
          </div>

          <div className="footer-top">
            <img
              src="/logo_transparent.svg"
              alt="PCG White Logo"
              loading="lazy"
            />
            <div className="line"></div>
          </div>

          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  2 N Santa Cruz,
                  <br />
                  Suite 201 Los Gatos,
                  <br />
                  CA 95030
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
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/facebook_icon.svg"
                  alt="Facebook Icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pcg_investors/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/instagram_icon.svg"
                  alt="Instagram Icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/PCG_Investors"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/twitter_icon.svg"
                  alt="Twitter Icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/partnership-capital-growth"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkedin_icon.svg"
                  alt="Linkedin Icon"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {currentYear} Partnership Capital Growth, LLC All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
