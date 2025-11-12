import React from "react";
import portfolioData from "../../../../data/portfolio.json";

const PortfolioCriteria = ({ sectionRef, location }) => {
  return (
    <section
      id="Criteria"
      ref={sectionRef}
      className={
        location.hash === "#Criteria" ? "show-section" : "hide-section"
      }
    >
      <div className="content-wrapper">
        <div className="content-inner-box">
          <div className="company-values">
            <div className="values-title">
              <h2>CRITERIA</h2>
            </div>
            <div className="value-text">
              <p>
                Partnership Capital Growth focuses on businesses with a proven
                business model to facilitate high growth opportunities through
                additional capital investment, resources and experience.
              </p>
            </div>
          </div>

          <div className="company-values">
            <div className="values-title">
              <h3>TARGETED INVESTMENT STAGE AND INVESTMENT CRITERIA</h3>
            </div>

            <div className="value-text">
              <div className="principles">
                {portfolioData.portfolioCriteria.map((item, index) => (
                  <div key={index} className="card_containar">
                    <div className="leftside_text">
                      <div className="image_containar">
                        <img
                          className="image"
                          src="/green_card.svg"
                          alt="Green Card Background"
                          loading="lazy"
                        />
                        <img
                          className="image_icon"
                          src={item.icon}
                          alt={item.alt}
                          loading="lazy"
                        />
                      </div>
                      <div className="card_list_items">
                        <ul>
                          {item.text.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
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
  );
};

export default PortfolioCriteria;
