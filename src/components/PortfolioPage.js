import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollHandler from "./ScrollHandler";
const OrgData = require("../data/organization.json");

function PortfolioPage() {
  const [value, setValue] = useState(localStorage.getItem("portfolioOption"));
  const navigate = useNavigate();

  const Portfolio = useRef();
  const Investment = useRef();
  const Criteria = useRef();
  const Location = useLocation();

  if (Location.pathname === "/portfolio-page") {
    document.body.classList.add("inner-header");
  }

  const divstatus = e => {
    setValue(e.target.value);
    localStorage.setItem("portfolioOption", e.target.value);
  };

  const filteredRealized = OrgData.filter(org => org.status === "realized");
  const filteredUnrealized = OrgData.filter(org => org.status === "unrealized");

  const fitnessCategory = OrgData.filter(org => org.category === "fitness");
  const foodsCategory = OrgData.filter(
    org => org.category === "foods and beverage"
  );
  const consumerCategory = OrgData.filter(org => org.category === "consumer");
  const lifestyleCategory = OrgData.filter(org => org.category === "lifestyle");
  const suplemntsCategory = OrgData.filter(
    org => org.category === "supplement"
  );

  useEffect(() => {
    if (Location.hash === "#Portfolio" && Portfolio.current) {
      Portfolio.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash === "#Investment" && Investment.current) {
      Investment.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash === "#Criteria" && Criteria.current) {
      Criteria.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.hash.includes("section")) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 100);
      });
    }
    if (Location.pathname === "/portfolio-page" && Portfolio.current) {
      Portfolio.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
    if (Location.pathname === "/portfolio-page/") {
      document.body.classList.add("inner-header");
    }
    if (Location.pathname === "/portfolio-page") {
      localStorage.setItem("activePage", "portfolio");
    }
  }, [Location]);

  return (
    <div>
      <Helmet>
        <title>
          PCG Investment portfolio in fitness & health, wellness & lifestyle
        </title>
        <meta
          name="description"
          content="PCG portfolio companies are: Numi Tea, Rudy's, Surftech, Anytime Fitness, Califia Farms, The Alaska Club, Designer Wellness, Dryabar, Cytosport, Gaia Herbs, and Ragnar"
        />
      </Helmet>
      <link
        rel="canonical"
        href="https://www.pcginvestors.com/portfolio-page"
      ></link>
      <div className="inner-page-wrapper portfoilo-wrapper">
        <ScrollHandler />
        <div className="page-block-portfolio">
          <div className="switch-lable">
            <ul>
              <li
                className={
                  Location.hash === "#Portfolio" || Location.hash === ""
                    ? "active-tab"
                    : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Portfolio"
                  onClick={() =>
                    navigate("/portfolio-page/#Portfolio", { replace: true })
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li
                className={
                  Location.hash === "#Investment" ? "active-tab" : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Investment"
                  onClick={() =>
                    navigate("/portfolio-page/#Investment", { replace: true })
                  }
                >
                  Investment
                </Link>
              </li>
              <li
                className={
                  Location.hash === "#Criteria" ? "active-tab" : "disable-tab"
                }
              >
                <Link
                  to="/portfolio-page/#Criteria"
                  onClick={() =>
                    navigate("/portfolio-page/#Criteria", { replace: true })
                  }
                >
                  Criteria
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* Portfolio Section */}
            <section
              id={`#Portfolio-page`}
              ref={el => {
                Portfolio.current = el;
              }}
              className={
                Location.hash === "#Portfolio" || Location.hash === ""
                  ? "show-section"
                  : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h2>PORTFOLIO</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scroll-menu-line">
                <div className="select-menu">
                  <label htmlFor="View">
                    View by:
                    <select name="Views" id="Views" onChange={divstatus}>
                      <option defaultValue value="Realized">
                        Unrealized / Realized
                      </option>
                      <option value="Category">Category</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="content-wrapper">
                {value === "Realized" || value === null ? (
                  <div>
                    <div className="content-inner-box">
                      <div className="company-values">
                        <div className="values-title">
                          <h3>UNREALIZED INVESTMENTS</h3>
                        </div>
                      </div>

                      <div className="card-investments">
                        <div className="card-wrapper">
                          {filteredUnrealized.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="ref-word">
                          *These investments are partially realized.
                        </p>
                      </div>

                      <div className="company-values">
                        <div className="values-title">
                          <h3>REALIZED INVESTMENTS</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {filteredRealized.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="category">
                    <div className="content-inner-box">
                      {/* Fitness */}
                      <div className="company-values">
                        <div className="values-title">
                          <h3>FITNESS</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {fitnessCategory.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Foods & Beverage */}
                      <div className="company-values">
                        <div className="values-title">
                          <h3>FOOD & BEVERAGE</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {foodsCategory.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Consumer */}
                      <div className="company-values">
                        <div className="values-title">
                          <h3>CONSUMER SERVICES / RETAIL</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {consumerCategory.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lifestyle */}
                      <div className="company-values">
                        <div className="values-title">
                          <h3>LIFESTYLE</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {lifestyleCategory.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Supplements */}
                      <div className="company-values">
                        <div className="values-title">
                          <h3>SUPPLEMENTS</h3>
                        </div>
                      </div>
                      <div className="card-investments">
                        <div className="card-wrapper">
                          {suplemntsCategory.map(data => (
                            <div
                              role="button"
                              tabIndex={0}
                              className="logo-box"
                              key={data.id}
                              onClick={() =>
                                navigate("/client-page", { state: { data } })
                              }
                              onKeyPress={(e) => e.key === "Enter" && navigate("/client-page", { state: { data } })}
                            >
                              <div className="logo-img-box">
                                <img
                                  className="image_containar"
                                  src={data.company_logo}
                                  alt={data.alt}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
            {/* Investmnet Categories */}
            <section
              id={`Investment`}
              ref={el => {
                Investment.current = el;
              }}
              className={
                Location.hash === "#Investment" ||
                Location.hash === "#section4" ||
                Location.hash === "#section5" ||
                Location.hash === "#section6" ||
                Location.hash === "#section7" ||
                Location.hash === "#section8"
                  ? "show-section"
                  : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h2>INVESTMENT CATEGORIES</h2>
                    </div>
                  </div>
                </div>
                <div className="investment-profile-wrapper">
                  {/* Profile number 01 */}
                  <section id={`#section5`}>
                    <div className="investment-main-content" key={1}>
                      <div className="discription_block_investment">
                        <div className="card_containar_investment">
                          <div className="leftside_text_investment">
                            <img
                              className="image_containar_investment"
                              src="/home-fitness.png"
                              alt="Fitness"
                            />
                            <div className="rightside_containar_investment">
                              <div className="name_label">
                                <img src="/Maskteam.svg" alt="Green Card" />
                                <p className="lable_p p1">Fitness</p>
                              </div>
                              <p className="short-desc">
                                PCG invests in companies that focus on fitness,
                                health, and overall maintenance of the body,
                                mind and spirit. This may include gyms/fitness
                                centers, fitness equipment companies, clothing
                                companies, sporting goods companies. The
                                different methods by which people train for
                                fitness has expanded greatly over the last
                                couple of years and we aim to be at the
                                forefront of these shifts.
                              </p>
                              <div className="brand-logos">
                                <img
                                  className=""
                                  src="/logos/worldHealth.png"
                                  alt="PCG Investment in World Health"
                                />
                                <img
                                  className=""
                                  src="/logos/anytime-fitness@3x.png"
                                  alt="PCG Investment in Self Esteem Brands"
                                />
                                <img
                                  className=""
                                  src="/logos/ragnar@3x.png"
                                  alt="PCG Investment in Ragnar Relay"
                                />
                                <img
                                  className=""
                                  src="/logos/the_alaska_club.png"
                                  alt="PCG Investment in The Alaska Club"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* card-2 */}
                  <section id={`#section4`}>
                    <div className="investment-main-content" key={2}>
                      <div className="discription_block_investment">
                        <div className="card_containar_investment">
                          <div className="leftside_text_investment">
                            <img
                              className="image_containar_investment"
                              src="/chocolate-pancake.png"
                              alt="Food & Beverage"
                            />
                            <div className="rightside_containar_investment">
                              <div className="name_label">
                                <img src="/Maskteam.svg" alt="Green Card" />
                                <p className="lable_p p2">Food & Beverage</p>
                              </div>
                              <p className="short-desc">
                                The food and beverage industry is comprised of
                                all companies involved in processing raw food
                                materials, packaging, and distributing them.
                                This includes fresh, prepared foods as well as
                                packaged foods, and nonalcoholic beverages.
                              </p>
                              <div className="brand-logos">
                                <img
                                  className=""
                                  src="/logos/sambazon@3x.png"
                                  alt="PCG Investment in Sambazon"
                                />
                                <img
                                  className=""
                                  src="/logos/gnoSport.png"
                                  alt="PCG Investment in CytoSport"
                                />
                                <img
                                  className=""
                                  src="/logos/promax@3x.png"
                                  alt="PCG Investment in Promax Nutrition"
                                />
                                <img
                                  className=""
                                  src="/logos/numi-on-state@3x.png"
                                  alt="PCG Investment in Numi Tea"
                                />
                                <img
                                  className=""
                                  src="/logos/califia.png"
                                  alt="PCG Investment in Califia Farms"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* card-3 */}
                  <section id={`#section6`}>
                    <div className="investment-main-content" key={3}>
                      <div className="discription_block_investment">
                        <div className="card_containar_investment">
                          <div className="leftside_text_investment">
                            <img
                              className="image_containar_investment"
                              src="/supermarket.png"
                              alt="Consumer Services / Retail"
                            />
                            <div className="rightside_containar_investment">
                              <div className="name_label">
                                <img src="/Maskteam.svg" alt="Green Card" />
                                <p className="lable_p p3">
                                  Consumer Services / Retail
                                </p>
                              </div>
                              <p className="short-desc">
                                Consumer Services refers to services for
                                personal, household or domestic use or
                                consumption. PCG is interested in consumer
                                services geared toward consumer products in
                                food, herbs, beverages, vitamins,
                                pharmaceuticals, cosmetics, hair products,
                                household cleaners, etc.
                              </p>
                              <div className="brand-logos">
                                <img
                                  className=""
                                  src="/logos/healthy_living.png"
                                  alt="PCG Investment in Healthy Living Network"
                                />
                                <img
                                  className=""
                                  src="/logos/planet_organic.png"
                                  alt="PCG Investment in Planet Organic"
                                />
                                <img
                                  className=""
                                  src="/logos/mrs_greens.png"
                                  alt="PCG Investment in Mrs. Green's"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* card-4 */}
                  <section id={`#section7`}>
                    <div className="investment-main-content" key={4}>
                      <div className="discription_block_investment">
                        <div className="card_containar_investment">
                          <div className="leftside_text_investment">
                            <img
                              className="image_containar_investment"
                              src="/lifestyles.png"
                              alt="Lifestyle"
                            />
                            <div className="rightside_containar_investment">
                              <div className="name_label">
                                <img src="/Maskteam.svg" alt="Green Card" />
                                <p className="lable_p p4">Lifestyle</p>
                              </div>
                              <p className="short-desc">
                                Lifestyle brands embody values, aspirations,
                                interests, attitudes, or opinions of groups or
                                cultures and seek to inspire, guide, and
                                motivate people, with the goal of their products
                                contributing to the definition of the consumer&apos;s
                                way of life. A business becomes a lifestyle
                                brand by focusing on evoking an emotional
                                connection with its customers, creating a desire
                                for a consumer to be affiliated with a
                                particular group or brand.
                              </p>
                              <div className="brand-logos">
                                <img
                                  className=""
                                  src="/logos/surftech@3x.png"
                                  alt="PCG Investment in Surftech"
                                />
                                <img
                                  className=""
                                  src="/logos/drybar@3x.png"
                                  alt="PCG Investment in DryBar"
                                />
                                <img
                                  className=""
                                  src="/logos/giftWorks.png"
                                  alt="PCG Investment in Gift Works"
                                />
                                <img
                                  className=""
                                  src="/logos/rudy's-1.png"
                                  alt="PCG Investment in Rudy's"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* card-5 */}
                  <section id={`#section8`}>
                    <div className="investment-main-content" key={5}>
                      <div className="discription_block_investment">
                        <div className="card_containar_investment">
                          <div className="leftside_text_investment">
                            <img
                              className="image_containar_investment"
                              src="/man-drinking.png"
                              alt="Supplements"
                            />
                            <div className="rightside_containar_investment">
                              <div className="name_label">
                                <img src="/Maskteam.svg" alt="Green Card" />
                                <p className="lable_p p5">Supplements</p>
                              </div>
                              <p className="short-desc">
                                Supplements include vitamins, minerals, amino
                                acids, and herbs or botanicals, as well as other
                                substances that can be used to supplement the
                                diet. Dietary supplements come in many forms,
                                including tablets, capsules, powders, energy
                                bars, and liquids. People use dietary
                                supplements for a wide assortment of reasons -
                                diets, medical conditions, boost energy, or to
                                get a good night&apos;s sleep.
                              </p>
                              <div className="brand-logos">
                                <img
                                  className=""
                                  src="/logos/designer_wellness_logo@3x.png"
                                  alt="PCG Investment in Designer Wellness"
                                />
                                <img
                                  className=""
                                  src="/logos/gaia-herbs@3x.png"
                                  alt="PCG Investment in Gaia Herbs"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            {/* Criteria */}

            <section
              id={`#Criteria`}
              ref={el => {
                Criteria.current = el;
              }}
              className={
                Location.hash === "#Criteria" ? "show-section" : "hide-section"
              }
            >
              <div className="content-wrapper">
                <div className="content-inner-box">
                  <div className="company-values">
                    <div className="values-title">
                      <h2> CRITERIA</h2>
                    </div>
                    <div className="value-text">
                      <p>
                        Partnership Capital Growth focuses on businesses with a
                        proven business model to facilitate high growth
                        opportunities through additional capital investment,
                        resources and experience.
                      </p>
                    </div>
                  </div>
                  <div className="company-values">
                    <div className="company-values">
                      <div className="values-title">
                        <h3>
                          TARGETED INVESTMENT STAGE AND INVESTMENT CRITERIA
                        </h3>
                      </div>
                    </div>
                    <div className="value-text">
                      <div className="principles">
                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/doller.svg"
                                alt="Doller Icon"
                              />
                            </div>

                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Revenue at or approaching at least $10M,
                                  strong growth characteristics, and positive
                                  EBITDA history
                                </li>
                                <li>
                                  Conservative leverage profile appropriately
                                  scaled to cash flow
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Proven.svg"
                                alt="Group Proplr Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Proven management team, ethically
                                  responsible{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Leading_market.svg"
                                alt="Share Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Leading market share in a large sector (or on
                                  that trajectory)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Core_following.svg"
                                alt="Core Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Core following with opportunity to expand into
                                  a larger consumer base
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Appropriate.svg"
                                alt="Appropriate Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Appropriate systems and focus on data-driven
                                  management practices
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Clear_thesis.svg"
                                alt="Clear Thesis Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>
                                  Clear thesis and alignment with management on
                                  how we will add value
                                </li>
                                <li>
                                  Agreement on a PCG Investment Blueprint and
                                  100-day action plan pre-close
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card_containar">
                          <div className="leftside_text">
                            <div className="image_containar">
                              <img
                                className="image"
                                src="/green_card.svg"
                                alt="Green Card"
                              />
                              <img
                                className="image_icon"
                                src="/Portfolio_card_icon/Clearly.svg"
                                alt="Clearly Icon"
                              />
                            </div>
                            <div className="card_list_items">
                              <ul>
                                <li>Clearly defined exit strategies</li>
                                <li>
                                  Clearly understood risks and opportunities
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default PortfolioPage;
