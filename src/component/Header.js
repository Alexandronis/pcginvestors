import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import Abouthover from "./OnHover/AboutHover";
import Portfoliohover from "./OnHover/PortfolioHover";
import Contacthover from "./OnHover/ContactHover";
import TeamHover from "./OnHover/TeamHover";

function Header() {
  const [isShown, setIsShown] = useState(0);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuOnclick = () => {
    const el = document.getElementById("burgerBtnMob");
    if (el) el.checked = false;
  };

  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };

  return (
    <div
      className={scroll ? "App-header bg-black" : "App-header bg-white"}
      onMouseLeave={() => setIsShown(0)}
    >
      <header className="main-header">
        <div
          className="logo"
          onClick={() => {
            localStorage.setItem("activePage", "");
          }}
        >
          <a href="/">
            <img src="/pcg-logo.png" alt="PCG Logo" />
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
                  onClick={() => {
                    menuOnclick();
                    navigate("/about", { replace: true });
                  }}
                  onMouseEnter={() => setIsShown(1)}
                >
                  <p>About Us</p>
                  <span></span>
                </Link>
                {isShown === 1 && (
                  <Abouthover
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
                  onClick={() => {
                    menuOnclick();
                    navigate("/portfolio-page/#Portfolio", { replace: true });
                  }}
                  onMouseEnter={() => setIsShown(2)}
                >
                  <p>Portfolio</p>
                  <span></span>
                </Link>
                {isShown === 2 && (
                  <Portfoliohover
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
                  onClick={() => {
                    menuOnclick();
                    navigate("/about/#our-team", { replace: true });
                  }}
                  onMouseEnter={() => setIsShown(3)}
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
                  onClick={() => {
                    menuOnclick();
                    navigate("/contact", { replace: true });
                  }}
                  onMouseEnter={() => setIsShown(4)}
                >
                  <p>Contact</p>
                  <span></span>
                </Link>
                {isShown === 4 && (
                  <Contacthover
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
              <img src="/pcg-logo.png" alt="PCG Logo" />
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
                      onClick={() => {
                        menuOnclick();
                        navigate("/about", { replace: true });
                      }}
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
                      onClick={() => {
                        menuOnclick();
                        navigate("/about/#our-team", { replace: true });
                      }}
                    >
                      Team
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.hash === "#Portfolio" ? "active" : ""}
                      to="/portfolio-page/#Portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        navigate("/portfolio-page/#Portfolio", {
                          replace: true,
                        });
                      }}
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
                      onClick={() => {
                        menuOnclick();
                        navigate("/portfolio-page/#Investment", {
                          replace: true,
                        });
                      }}
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
                      onClick={() => {
                        menuOnclick();
                        navigate("/portfolio-page/#Criteria", {
                          replace: true,
                        });
                      }}
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
                      onClick={() => {
                        menuOnclick();
                        navigate("/contact", { replace: true });
                      }}
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
}

export default Header;
