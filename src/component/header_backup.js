import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import Abouthover from "./onhover/abouthover";
import Portfoliohover from "./onhover/portfoliohover";
import Contacthover from "./onhover/contacthover";

function Header(props) {
  const [isShown, setIsShown] = useState(0);
  const boxRef = React.useRef(null);
  const [scroll, setScroll] = useState(false);
  const Location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  //========================= *Navigation Dot Animation* created by sachith 11/24/2020 =========================
  const [activeClass, setActiveClass] = useState();
  const [animation, setAnimation] = useState(false);
  const [animationMargin, setAnimationMargin] = useState("0%");
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setAnimation(false);
    setTimeout(() => setAnimation(true), 200);

    const { pathname } = location;

    if (pathname.includes("/about")) {
      const margin = currentPath.includes("/portfolio-page")
        ? "45%"
        : currentPath.includes("/contact")
        ? "88%"
        : "5%";

      setCurrentPath(pathname);
      setAnimationMargin(margin);
      return setActiveClass("about");
    }

    if (pathname.includes("/portfolio-page")) {
      const margin = currentPath.includes("/contact")
        ? "88%"
        : currentPath.includes("/portfolio-page")
        ? "45%"
        : currentPath.includes("/client-page")
        ? "45%"
        : "5%";

      setCurrentPath(pathname);
      setAnimationMargin(margin);
      return setActiveClass("portfolio");
    }
    if (pathname.includes("/charitable-contributions")) {
      const margin = currentPath.includes("/contact")
        ? "88%"
        : currentPath.includes("/charitable-contributions")
        ? "45%"
        : currentPath.includes("/client-page")
        ? "45%"
        : "5%";

      setCurrentPath(pathname);
      setAnimationMargin(margin);
      return setActiveClass("portfolio");
    }

    if (pathname.includes("/contact")) {
      const margin = currentPath.includes("/about")
        ? "5%"
        : currentPath.includes("/about")
        ? "88%"
        : currentPath.includes("/portfolio-page")
        ? "45%"
        : "88%";

      setCurrentPath(pathname);
      setAnimationMargin(margin);
      return setActiveClass("contact");
    }

    if (pathname.includes("/client-page")) {
      const margin = currentPath.includes("/contact")
        ? "45%"
        : currentPath.includes("/portfolio-page")
        ? "45%"
        : currentPath.includes("/about")
        ? "45%"
        : "45%";

      setCurrentPath(pathname);
      setAnimationMargin(margin);
      return setActiveClass("client-page");
    }
  }, [location]);
  //==========================================================================================================

  //=========================*reset Dropdown menu* created by sachith 11/20/2020 ===================================
  const resetDropdown = () => {
    localStorage.removeItem("portfolioOption");
  };

  const aboutLink = () => {
    //setIsShown(0);
  };
  const portfolioLink = () => {
    //setIsShown(0);
  };

  const conatctLink = () => {
    //setIsShown(0);
  };
  //==========================================================================================================
  return (
    <div
      className={scroll ? "App-header bg-black" : "App-header bg-white"}
      onMouseLeave={() => {
        setIsShown(0);
      }}
    >
      <header>
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
              <li
                className={
                  isShown === 1
                    ? "list show"
                    : isShown === 0
                    ? "list hide"
                    : "list non-active"
                }
                onClick={() => {
                  isShown === 1 || Location.pathname.includes("/client-page") ? setIsShown(0) : setIsShown(1); 
                  resetDropdown();
                }}
              >
                <Link
                  className={
                    isShown === 1
                      ? "show"
                      : isShown === 0
                      ? "hide"
                      : " none-active  "
                  }
                  id="1"
                  ref={boxRef}
                  onMouseEnter={() => setIsShown(1)}
                  onClick={() => {
                    isShown === 1 ? setIsShown(0) : setIsShown(1);
                    resetDropdown();
                  }}
                  to="/about"
                  style={{
                    fontWeight: activeClass === "about" ? "600" : "normal", // bold when the user click the tab link
                    pointerEvents:
                      Location.pathname === "/client-page" ? "none" : "auto",
                    cursor:
                      Location.pathname === "/client-page"
                        ? "default"
                        : "pointer",
                  }}
                >
                  About
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
              <li
                className={
                  isShown === 2
                    ? "list show"
                    : isShown === 0
                    ? "list hide"
                    : "list non-active"
                }
                onClick={() => {
                  isShown === 2 || Location.pathname.includes("/client-page") ? setIsShown(0) : setIsShown(2);
                  resetDropdown();
                }}
              >
                <Link
                  className={
                    isShown === 2
                      ? "show"
                      : isShown === 0
                      ? "hide"
                      : " none-active  "
                  }
                  id="2"
                  ref={boxRef}
                  onMouseEnter={() => setIsShown(2)}
                  onClick={() => {
                    isShown === 2 ? setIsShown(0) : setIsShown(2);
                    resetDropdown();
                  }}
                  to="/portfolio-page"
                  style={{
                    fontWeight: activeClass === "portfolio" ? "600" : "normal", // bold when the user click the tab link
                    pointerEvents:
                      Location.pathname === "/client-page" ? "none" : "auto",
                    cursor:
                      Location.pathname === "/client-page"
                        ? "default"
                        : "pointer",
                  }}
                >
                  Portfolio
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
              {/* <li
                className={
                  isShown === 3
                    ? "list show"
                    : isShown === 0
                    ? "list hide"
                    : "list non-active"
                }
                onClick={() => {
                  isShown === 3 || Location.pathname.includes("/charitable-contributions") ? setIsShown(0) : setIsShown(3);
                  resetDropdown();
                }}
              >
                <Link
                  className={
                    isShown === 3
                      ? "show"
                      : isShown === 0
                      ? "hide"
                      : " none-active  "
                  }
                  id="3"
                  ref={boxRef}
                  onMouseEnter={() => setIsShown(3)}
                  onClick={() => {
                    isShown === 2 ? setIsShown(0) : setIsShown(3);
                    resetDropdown();
                  }}
                  to="/charitable-contributions"
                  style={{
                    fontWeight: activeClass === "charitable-contributions" ? "600" : "normal", // bold when the user click the tab link
                    pointerEvents:
                      Location.pathname === "/charitable-contributions" ? "none" : "auto",
                    cursor:
                      Location.pathname === "/charitable-contributions"
                        ? "default"
                        : "pointer",
                  }}
                >
                  Charitable Contributions
                </Link>
                
              </li> */}
              <li
                className={
                  isShown === 4
                    ? "list show"
                    : isShown === 0
                    ? "list hide"
                    : "list non-active"
                }
                onClick={() => {
                  isShown === 4 || Location.pathname.includes("/client-page") ? setIsShown(0) : setIsShown(4);
                  resetDropdown();
                }}
              >
                <Link
                  className={
                    isShown === 4
                      ? "show"
                      : isShown === 0
                      ? "hide"
                      : " none-active  "
                  }
                  id="4"
                  ref={boxRef}
                  onMouseEnter={() => setIsShown(4)}
                  onClick={() => {
                    isShown === 4 ? setIsShown(0) : setIsShown(4);
                    resetDropdown();
                  }}
                  to="/contact"
                  style={{
                    fontWeight: activeClass === "contact" ? "600" : "normal", // bold when the user click the tab link
                    pointerEvents:
                      Location.pathname === "/client-page" ? "none" : "auto",
                    cursor:
                      Location.pathname === "/client-page"
                        ? "default"
                        : "pointer",
                  }}
                >
                  Contact
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
            {/* ******************************************* Green Dot animation CSS properties **************************************/}
            <div className="menu-active-dot">
              {activeClass === "about" && (
                <span
                  className="dot"
                  style={{
                    marginLeft: animation ? "3%" : animationMargin,
                    transition: "all 0.4s cubic-bezier(0.96, 0.1, 0.1, 1.13)",
                    transitionTimingFunction: "ease-in-out",
                  }}
                ></span>
              )}
              {activeClass === "portfolio" && (
                <span
                  className="dot"
                  style={{
                    marginLeft: animation ? "25%" : animationMargin,
                    transition: "all 0.4s cubic-bezier(0.96, 0.1, 0.1, 1.13)",
                    transitionTimingFunction: "ease-in-out",
                  }}
                ></span>
              )}
               {activeClass === "charitable-contributions" && (
                <span
                  className="dot"
                  style={{
                    marginLeft: animation ? "60%" : animationMargin,
                    transition: "all 0.4s cubic-bezier(0.96, 0.1, 0.1, 1.13)",
                    transitionTimingFunction: "ease-in-out",
                  }}
                ></span>
              )}
              {activeClass === "contact" && (
                <span
                  className="dot"
                  style={{
                    marginLeft: animation ? "94%" : animationMargin,
                    transition: "all 0.4s cubic-bezier(0.96, 0.1, 0.1, 1.13)",
                    transitionTimingFunction: "ease-in-out",
                  }}
                ></span>
              )}
              {activeClass === "client-page" && (
                <span
                  className="dot"
                  style={{
                    marginLeft: "45%",
                    transition: "all 0.4s cubic-bezier(0.96, 0.1, 0.1, 1.13)",
                    transitionTimingFunction: "ease-in-out",
                  }}
                ></span>
              )}
            </div>
            {/* *********************************************************************************************************************/}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
