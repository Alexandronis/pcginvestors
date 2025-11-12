import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import AboutHover from "../common/OnHover/AboutHover";
import PortfolioHover from "../common/OnHover/PortfolioHover";
import ContactHover from "../common/OnHover/ContactHover";
import TeamHover from "../common/OnHover/TeamHover";

const Header = () => {
  const [isShown, setIsShown] = useState(0);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Handlers ---
  const handleMouseLeave = () => setIsShown(0);

  const handleLogoClick = () => {
    localStorage.setItem("activePage", "");
  };

  const handleLogoKeyPress = e => {
    if (e.key === "Enter") localStorage.setItem("activePage", "");
  };

  const menuOnclick = () => {
    const el = document.getElementById("burgerBtnMob");
    if (el) el.checked = false;
  };

  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };

  const handleNavClick = (path, replace = true) => {
    menuOnclick();
    navigate(path, { replace });
  };

  const handleMouseEnter = index => {
    setIsShown(index);
  };

  return (
    <div
      className={scroll ? "App-header bg-black" : "App-header bg-white"}
      onMouseLeave={handleMouseLeave}
    >
      <header className="main-header">
        <div
          role="button"
          tabIndex={0}
          className="logo"
          onClick={handleLogoClick}
          onKeyPress={handleLogoKeyPress}
        >
          <a href="/">
            <img src="/pcg-logo.png" alt="PCG Logo" loading="lazy" />
          </a>
        </div>

        <nav>
          <div className="nav-list">
            <ul>
              <li className="list">
                <Link
                  className={
                    (location.pathname === "/about/" &&
                      location.hash === "#about-pcg") ||
                    (location.pathname === "/about" && location.hash === "")
                      ? "active"
                      : ""
                  }
                  to="/about"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() => handleNavClick("/about")}
                  onMouseEnter={() => handleMouseEnter(1)}
                >
                  <p>About Us</p>
                  <span></span>
                </Link>
                {isShown === 1 && (
                  <AboutHover
                    onClick={() => {
                      isShown === 1 ? setIsShown(0) : setIsShown(1);
                      resetDropdown();
                    }}
                  />
                )}
              </li>

              <li className="list">
                <Link
                  className={
                    location.pathname === "/portfolio-page/" ? "active" : ""
                  }
                  to="/portfolio-page/#Portfolio"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() =>
                    handleNavClick("/portfolio-page/#Portfolio")
                  }
                  onMouseEnter={() => handleMouseEnter(2)}
                >
                  <p>Portfolio</p>
                  <span></span>
                </Link>
                {isShown === 2 && (
                  <PortfolioHover
                    onClick={() => {
                      isShown === 2 ? setIsShown(0) : setIsShown(2);
                      resetDropdown();
                    }}
                  />
                )}
              </li>

              <li className="list">
                <Link
                  className={location.hash === "#our-team" ? "active" : ""}
                  to="/about/#our-team"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() => handleNavClick("/about/#our-team")}
                  onMouseEnter={() => handleMouseEnter(3)}
                >
                  <p>Team</p>
                  <span></span>
                </Link>
                {isShown === 3 && (
                  <TeamHover
                    onClick={() => {
                      isShown === 3 ? setIsShown(0) : setIsShown(3);
                      resetDropdown();
                    }}
                  />
                )}
              </li>

              <li className="list">
                <Link
                  className={location.pathname === "/contact" ? "active" : ""}
                  to="/contact"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={2500}
                  onClick={() => handleNavClick("/contact")}
                  onMouseEnter={() => handleMouseEnter(4)}
                >
                  <p>Contact</p>
                  <span></span>
                </Link>
                {isShown === 4 && (
                  <ContactHover
                    onClick={() => {
                      isShown === 4 ? setIsShown(0) : setIsShown(4);
                      resetDropdown();
                    }}
                  />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* --- Mobile Header --- */}
      <header className="header-mob">
        <nav>
          <div className="logo">
            <a href="/">
              <img src="/pcg-logo.png" alt="PCG Logo" loading="lazy" />
            </a>
          </div>
          <div className="menu">
            <div className="menuIcon">
              <div id="menuToggle">
                <input type="checkbox" id="burgerBtnMob" />
                <span></span>
                <span></span>
                <span></span>

                <ul id={scroll ? "menu-white" : "menu-black"}>
                  <li className="list">
                    <Link
                      className={location.pathname === "/about" ? "active" : ""}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => handleNavClick("/about")}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.hash === "#our-team" ? "active" : ""}
                      to="/about/#our-team"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => handleNavClick("/about/#our-team")}
                    >
                      Team
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={
                        location.hash === "#Portfolio" ? "active" : ""
                      }
                      to="/portfolio-page/#Portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() =>
                        handleNavClick("/portfolio-page/#Portfolio")
                      }
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={
                        location.hash === "#Investment" ? "active" : ""
                      }
                      to="/portfolio-page/#Investment"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() =>
                        handleNavClick("/portfolio-page/#Investment")
                      }
                    >
                      Investment Categories
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.hash === "#Criteria" ? "active" : ""}
                      to="/portfolio-page/#Criteria"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() =>
                        handleNavClick("/portfolio-page/#Criteria")
                      }
                    >
                      Criteria
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={
                        location.pathname === "/contact" ? "active" : ""
                      }
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => handleNavClick("/contact")}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
