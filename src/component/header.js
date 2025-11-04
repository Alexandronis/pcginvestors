import React, { useState, useEffect } from "react";
import { Link as RLink, useLocation, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

import Abouthover from "./onhover/abouthover";
import Portfoliohover from "./onhover/portfoliohover";
import Contacthover from "./onhover/contacthover";
import TeamHover from "./onhover/teamhover"
function Header() {
  const [isShown, setIsShown] = useState(0);
  // const boxRef = React.useRef(null);

  const [scroll, setScroll] = useState(false);
  const history = useHistory();
  const location = useLocation();



  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const menuOnclick = () => {
    // document.getElementById("burgerBtn").checked = false;
    document.getElementById("burgerBtnMob").checked = false;
  };
  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };

  return (
    <div className={scroll ? "App-header bg-black" : "App-header bg-white"}
    onMouseLeave={() => {
      setIsShown(0);
    }}>
      {/* {!window.matchMedia("(max-width: 1199px)").matches ? ():()} */}
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
                        (location.pathname === "/about/" && location.hash === "#about-pcg") ||
                        (location.pathname === "/about" && location.hash === "") 
                        ? "active" : ""}
                      // activeClass={location.pathname === "/about" ? "active" : " "}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about");
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
                      className={location.pathname === "/portfolio-page/" ? "active" : ""}
                      // activeClass={location.hash === "#Portfolio" ? "active" : " "}
                      to="/portfolio-page/#Portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio-page/#Portfolio");
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
                      // activeClass={location.pathname === "/charitable-contributions" ? "active" : " "}
                      to="/about/#our-team"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about/#our-team");
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

              {/* <li className="list">
                    <Link
                      className={location.pathname === "/charitable-contributions" ? "active" : ""}
                      // activeClass={location.pathname === "/charitable-contributions" ? "active" : " "}
                      to="/charitable-contributions"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/charitable-contributions");
                      }}
                    >
                      <p>Charitable Contributions</p>
                      <span></span>
                    </Link>
                  </li> */}
                  <li className="list">
                    <Link
                      className={location.pathname === "/contact" ? "active" : ""}
                      // activeClass={location.pathname === "/contact" ? "active" : " "}
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/contact");
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
                      // activeClass={location.pathname === "/" ? "active" : " "}
                      className={location.pathname === "/about" ? "active" : ""}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about");
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.hash === "#our-team" ? "active" : ""}
                      // activeClass={location.hash === "#our-team" ? "active" : " "}
                      to="/about/#our-team"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about/#our-team");
                      }}
                    >
                      Team
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.hash === "#Portfolio" ? "active" : ""}
                      // activeClass={location.hash === "#Portfolio" ? "active" : " "}
                      to="/portfolio-page/#Portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio-page/#Portfolio");
                      }}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.hash === "#Investment" ? "active" : " "}
                      // activeClass={location.hash === "#Investment" ? "active" : " "}
                      to="/portfolio-page/#Investment"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio-page/#Investment");
                      }}
                    >
                      Investment Categories
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.hash === "#Criteria" ? "active" : " "}
                      // activeClass={location.hash === "#Criteria" ? "active" : " "}
                      to="/portfolio-page/#Criteria"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio-page/#Criteria");
                      }}
                    >
                     Criteria
                    </Link>
                  </li>
                  {/* <li className="list">
                    <Link
                      className={location.pathname === "/charitable-contributions" ? "active" : " "}
                      // activeClass={location.pathname === "/charitable-contributions" ? "active" : " "}
                      to="/charitable-contributions"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/charitable-contributions");
                      }}
                    >
                      Charitable Contributions
                    </Link>
                  </li> */}
                  <li className="list">
                    <Link
                      className={location.pathname === "/contact" ? "active" : " "}
                      // activeClass={location.pathname === "/contact" ? "active" : " "}
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/contact");
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
