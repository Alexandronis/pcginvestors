import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ScrollHandler from "./scrollHandler";
import CharitableContributions from "./CharitableContributions";

const teamData = require("./Portfolio/Data/profile.json");

function About(props) {
  // scroll refs
  const AboutPCG = useRef();
  const OurTeam = useRef();
  const navigate = useNavigate();

  const Location = useLocation();

  const [selectedIndex, setSelectedIndex] = React.useState(false);
  const [isShown, setIsShown] = useState(0);
  const boxRef = React.useRef([]);

  const handleExpandClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
  };

  if (props.location.pathname === "/about") {
    document.body.classList.add("inner-header");
  }

  useEffect(() => {
    if (Location.hash === "#about-pcg" && AboutPCG.current) {
      AboutPCG.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }

    if (Location.hash === "#our-team" && OurTeam.current) {
      OurTeam.current.scrollIntoView();
    }

    if (Location.pathname === "/about" && AboutPCG.current) {
      AboutPCG.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }

    if (props.location.pathname === "/about/") {
      document.body.classList.add("inner-header");
    }

    // Expand team card from hash
    if (Location.hash.includes("sectionteam")) {
      var index = Number.parseInt(Location.hash.replace("#sectionteam", ""));
      setSelectedIndex(index + 1);
      setIsShown(index + 1);
    }

    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 100);
    });
  }, [Location]);

  const handleTabClick = (hash) => {
    navigate(`/about/${hash}`, { replace: true });
  };

  return (
    <div>
      <Helmet>
        <title>About PCG Investors & our value-based investment team</title>
        <meta
          name="description"
          content="Private equity investors in PCG Team are Brent Knudsen, Vern Christensen, Webb Knudsen, Hiren Modi, and Melanie Pepper"
        />
      </Helmet>
      <link rel="canonical" href="https://www.pcginvestors.com/about"></link>
      <div className="inner-page-wrapper about-us-wrapper">
        <ScrollHandler />
        <div className="page-block-about">
          <div className="switch-lable">
            <ul>
              {Location.hash === "#about-pcg" || Location.hash === "" ? (
                <li className="active-tab">
                  <Link
                    to="/about/#about-pcg"
                    onClick={() => handleTabClick("#about-pcg")}
                  >
                    About PCG
                  </Link>
                </li>
              ) : (
                <li className="active-tab">
                  <Link
                    to="/about/#our-team"
                    onClick={() => handleTabClick("#our-team")}
                  >
                    PCG Team
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            {/* ABOUT PCG */}
            <section
              id="#about-pcg"
              ref={(el) => {
                AboutPCG.current = el;
              }}
              className={
                Location.hash === "#about-pcg" || Location.hash === ""
                  ? "show-section"
                  : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h2>INVESTING IN HEALTHIER LIVES</h2>
                    </div>
                    <div className="value-text">
                      <p className="padding-para">
                        Partnership Capital Growth was founded in 2006 with a
                        vision to foster growth within the healthy living
                        sector by investing in consumer products, services, and
                        technology. Here at PCG, we share a vision to improve
                        the world by helping people build a healthier and
                        happier future.
                      </p>
                      <p>
                        Being founded by some of the first to specialize in the
                        healthy living space, we bring an experience-led
                        perspective that has outlasted the test of time since
                        inception. With a 20- year legacy of successful
                        investments in renowned brands, our mission is to
                        deliver substantial value for our portfolio companies
                        and investors through our partnership- capital-growth /
                        value built on values approach.
                      </p>
                    </div>
                  </div>
                  <div className="company-values">
                    <div className="values-title">
                      <h2>OUR VALUES</h2>
                    </div>
                    <div className="value-text">
                      <p className="padding-para">
                        Being founded by some of the first to specialize in the
                        healthy living space, we bring an experience-led
                        perspective that has outlasted the test of time since
                        inception. With a 20- year legacy of successful
                        investments in renowned brands, our mission is to
                        deliver substantial value for our portfolio companies
                        and investors through our partnership- capital-growth /
                        value built on values approach.
                      </p>
                      <p>
                        Under this focus on values C value, we invest in areas we
                        know, partner with market- leading companies, and
                        maintain a disciplined approach to structure and
                        diligence to offer unparalleled financial and strategic
                        support.
                      </p>
                    </div>
                  </div>
                  <div className="company-values">
                    <div className="values-title">
                      <span></span>
                      <h2>OUR PRINCIPLES</h2>
                    </div>
                    <div className="value-text">
                      <p className="padding-para">
                        We practice our values through an absolute commitment
                        to:
                      </p>
                      <div className="principles">
                        {/* Principle cards */}
                        {/* Keep all card JSX unchanged */}
                      </div>
                    </div>
                  </div>

                  <div className="company-values">
                    <CharitableContributions />
                  </div>
                </div>
              </div>
            </section>

            {/* OUR TEAM */}
            <section
              id="#our-team"
              ref={(el) => {
                OurTeam.current = el;
              }}
              className={
                Location.hash === "#our-team" ||
                Location.hash === "#sectionteam0" ||
                Location.hash === "#sectionteam1" ||
                Location.hash === "#sectionteam2" ||
                Location.hash === "#sectionteam3" ||
                Location.hash === "#sectionteam4" ||
                Location.hash === "#sectionteam5" ||
                Location.hash === "#sectionteam6" ||
                Location.hash === "#sectionteam7" ||
                Location.hash === "#sectionteam8" ||
                Location.hash === "#sectionteam9" ||
                Location.hash === "#section0" ||
                Location.hash === "#section1" ||
                Location.hash === "#section2" ||
                Location.hash === "#section3" ||
                Location.hash === "#section4" ||
                Location.hash === "#section5" ||
                Location.hash === "#section6" ||
                Location.hash === "#section7" ||
                Location.hash === "#section8" ||
                Location.hash === "#section9"
                  ? "show-section"
                  : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h2> PCG TEAM</h2>
                    </div>
                    <div className="value-text">
                      <p>
                        Partnership Capital Growth Investors has a team of
                        investment professionals who are dedicated to healthy
                        living and the success of our investments and portfolio
                        companies. PCG’s seasoned team of investment
                        professionals combines industry leading experience from
                        private equity, investment banking, consulting and
                        operations.
                      </p>
                    </div>
                  </div>

                  <div className="team-profile-wrapper">
                    {teamData.map((data, i) => {
                      return (
                        <div
                          ref={(el) => (boxRef.current[i] = el)}
                          className={
                            isShown === i + 1
                              ? "profile-main-content active index" + data.id
                              : isShown === 0
                                ? "profile-main-content"
                                : "profile-main-content none-active"
                          }
                          id={`#sectionteam` + i}
                          key={i}
                        >
                          <div className="discription_block_team">
                            <div className="card_containar_team">
                              <div className="leftside_text_team">
                                <img
                                  className="image_containar_team"
                                  src={data.image}
                                  alt={data.alt}
                                />
                                <div className="rightside_containar">
                                  <div className="name_label">
                                    <img src="/Maskteam.svg" alt="Green Card" />
                                    <p>
                                      {data.name}
                                      <span>{data.designation}</span>
                                    </p>
                                  </div>
                                  <p className="short-desc">
                                    {data.short_description}
                                  </p>
                                  <div className="header_icons">
                                    {data.email !== "" ? (
                                      <a href={data.email}>
                                        <img
                                          src={data.emailIcon}
                                          alt={data.emailAlt}
                                        />
                                      </a>
                                    ) : null}

                                    <a href={data.linkedin} target="_blank">
                                      <img
                                        src={data.linkedinIcon}
                                        alt="Linkedin Icon"
                                      />
                                    </a>
                                  </div>
                                  <div className="arrow_btn">
                                    <span>
                                      <Link to={`#section` + data.id}>
                                        <img
                                          onClick={() => {
                                            handleExpandClick(data.id);
                                            setIsShown(i + 1);
                                          }}
                                          src="/arrowDown.svg"
                                          alt="Arrow Icon"
                                        />
                                      </Link>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section id={`#section` + data.id}>
                            <div className="profile-lg-card">
                              <div className="profilr-lg-inner">
                                {selectedIndex === data.id ? (
                                  <>
                                    <div className="card_content_wrapper">
                                      <img
                                        src={data.coverImage}
                                        alt={data.alt}
                                        className="cover-img"
                                      />
                                      <div className="card_content-col">
                                        <div className="image_cap">
                                          <div className="profile_discription">
                                            <img
                                              src={data.colorImage}
                                              alt={data.alt}
                                            />
                                            <p className="profile-text-01">
                                              {data.short_description}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="profile_header">
                                          <div className="header_tagline">
                                            <div className="subheding_text">
                                              <h2>{data.name}</h2>
                                              <h5>{data.designation}</h5>
                                            </div>
                                            <div className="header_icons">
                                              {data.email !== "" ? (
                                                <a href={data.email}>
                                                  <img
                                                    src={data.emailIcon}
                                                    alt={data.emailAlt}
                                                  />
                                                </a>
                                              ) : null}

                                              {data.linkedin !== "" ? (
                                                <a
                                                  href={data.linkedin}
                                                  target="_blank"
                                                >
                                                  <img
                                                    src={data.linkedinIcon}
                                                    alt="Linkedin Icon"
                                                    target="_blank"
                                                  />
                                                </a>
                                              ) : (
                                                ""
                                              )}

                                              <Link to={`#section` + data.id}>
                                                <img
                                                  className="arrow"
                                                  src="/arrowUp.svg"
                                                  alt="Arrow Icon"
                                                  onClick={() => {
                                                    handleExpandClick(data.id);
                                                    setIsShown(0);
                                                  }}
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                          <p className="main-desc one">
                                            {data.long_description}
                                          </p>
                                          <p className="main-desc">
                                            {data.long_description2}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </section>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
