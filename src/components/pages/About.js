import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import ScrollHandler from "../common/ScrollHandler";
import CharitableContributions from "../common/CharitableContributions";
import principlesData from "../../data/aboutPrinciples.json";
import teamData from "../../data/profile.json";
import learnMoreData from "../../data/aboutLearnMore.json";

const About = () => {
  const AboutPCG = useRef();
  const OurTeam = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(false);
  const [isShown, setIsShown] = useState(0);
  const boxRef = useRef([]);

  const handleExpandClick = index => {
    setSelectedIndex(prev => (prev === index ? "" : index));
  };

  if (location.pathname === "/about") {
    document.body.classList.add("inner-header");
  }

  useEffect(() => {
    if (
      AboutPCG.current &&
      (location.hash === "#about-pcg" || location.pathname === "/about")
    ) {
      AboutPCG.current.scrollIntoView();
      window.scrollTo(0, window.scrollY + 100);
    }

    if (OurTeam.current && location.hash === "#our-team") {
      OurTeam.current.scrollIntoView();
    }

    // Expand team card from hash
    if (location.hash.includes("sectionteam")) {
      const index = Number(location.hash.replace("#sectionteam", ""));
      // ✅ Wrap in timeout to avoid sync setState warning
      setTimeout(() => {
        setSelectedIndex(index + 1);
        setIsShown(index + 1);
      }, 0);
    }

    setTimeout(() => window.scrollTo(0, window.scrollY + 100), 0);
  }, [location]);

  const handleTabClick = hash => {
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
              {location.hash === "#about-pcg" || location.hash === "" ? (
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
              ref={el => {
                AboutPCG.current = el;
              }}
              className={
                location.hash === "#about-pcg" || location.hash === ""
                  ? "show-section"
                  : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  {/* Investing & Values */}
                  <div className="company-values">
                    <div className="values-title">
                      <h2>INVESTING IN HEALTHIER LIVES</h2>
                    </div>
                    <div className="value-text">
                      <p className="padding-para">
                        Partnership Capital Growth was founded in 2006 with a
                        vision to foster growth within the healthy living sector
                        by investing in consumer products, services, and
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
                        Under this focus on values C value, we invest in areas
                        we know, partner with market- leading companies, and
                        maintain a disciplined approach to structure and
                        diligence to offer unparalleled financial and strategic
                        support.
                      </p>
                    </div>
                  </div>

                  {/* Principles mapped from JSON */}
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
                        {principlesData.map((card, i) => (
                          <div className="card_containar" key={i}>
                            <div className="leftside_text">
                              <div className="image_containar">
                                <img
                                  className="image"
                                  src="/green_card.svg"
                                  alt="Green Card"
                                  loading="lazy"
                                />
                                <img
                                  className="image_icon"
                                  src={card.icon}
                                  alt={`${card.title} Icon`}
                                  loading="lazy"
                                />
                                <h2>{card.title}</h2>
                              </div>
                              <div className="card_list_items">
                                <ul>
                                  {card.list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="company-values">
                    <CharitableContributions />
                  </div>
                </div>
              </div>

              {/* Learn More cards */}
              <div className="content-wrapper learn-more-about">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <span></span>
                      <h2>LEARN MORE ABOUT US</h2>
                    </div>
                    <div className="value-text">
                      <div className="principles">
                        {learnMoreData.map((card, i) => (
                          <div className="card_containar" key={i}>
                            <div className="leftside_text">
                              <div className="download_img">
                                <a
                                  target="_blank"
                                  href={card.href}
                                  download
                                  rel="noreferrer"
                                >
                                  <img
                                    className="image_containar"
                                    src={card.mainIcon}
                                    alt="Green Card"
                                    loading="lazy"
                                  />
                                  <img
                                    className="download"
                                    src={card.secondaryIcon}
                                    alt="Download Icon"
                                    loading="lazy"
                                  />
                                </a>
                              </div>
                              <div className="card_list_items">
                                <ul>
                                  <li>{card.title}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR TEAM */}
            <section
              id="#our-team"
              ref={el => {
                OurTeam.current = el;
              }}
              className={
                location.hash.startsWith("#our-team") ||
                location.hash.startsWith("#sectionteam") ||
                location.hash.startsWith("#section")
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
                </div>

                <div className="team-profile-wrapper">
                  {teamData.map((data, i) => (
                    <div
                      ref={el => (boxRef.current[i] = el)}
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
                              loading="lazy"
                            />
                            <div className="rightside_containar">
                              <div className="name_label">
                                <img
                                  src="/Maskteam.svg"
                                  alt="Green Card"
                                  loading="lazy"
                                />
                                <p>
                                  {data.name}
                                  <span>{data.designation}</span>
                                </p>
                              </div>
                              <p className="short-desc">
                                {data.short_description}
                              </p>
                              <div className="header_icons">
                                {data.email && (
                                  <a href={data.email}>
                                    <img
                                      src={data.emailIcon}
                                      alt={data.emailAlt}
                                      loading="lazy"
                                    />
                                  </a>
                                )}
                                {data.linkedin && (
                                  <a
                                    href={data.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <img
                                      src={data.linkedinIcon}
                                      alt="Linkedin Icon"
                                      loading="lazy"
                                    />
                                  </a>
                                )}
                              </div>
                              <div className="arrow_btn">
                                <span>
                                  <Link to={`#section${data.id}`}>
                                    <button
                                      onClick={() => {
                                        handleExpandClick(data.id);
                                        setIsShown(i + 1);
                                      }}
                                    >
                                      <img
                                        src="/arrowDown.svg"
                                        alt="Arrow Icon"
                                        loading="lazy"
                                      />
                                    </button>
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <section id={`section${data.id}`}>
                        <div className="profile-lg-card">
                          <div className="profilr-lg-inner">
                            {selectedIndex === data.id && (
                              <div className="card_content_wrapper">
                                <img
                                  src={data.coverImage}
                                  alt={data.alt}
                                  className="cover-img"
                                  loading="lazy"
                                />
                                <div className="card_content-col">
                                  <div className="image_cap">
                                    <div className="profile_discription">
                                      <img
                                        src={data.colorImage}
                                        alt={data.alt}
                                        loading="lazy"
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
                                        {data.email && (
                                          <a href={data.email}>
                                            <img
                                              src={data.emailIcon}
                                              alt={data.emailAlt}
                                              loading="lazy"
                                            />
                                          </a>
                                        )}
                                        {data.linkedin && (
                                          <a
                                            href={data.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            <img
                                              src={data.linkedinIcon}
                                              alt="Linkedin Icon"
                                              loading="lazy"
                                            />
                                          </a>
                                        )}
                                        <Link to={`#section${data.id}`}>
                                          <button
                                            className="arrow"
                                            onClick={() => {
                                              handleExpandClick(data.id);
                                              setIsShown(0);
                                            }}
                                          >
                                            <img
                                              src="/arrowUp.svg"
                                              alt="Arrow Icon"
                                              loading="lazy"
                                            />
                                          </button>
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
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
