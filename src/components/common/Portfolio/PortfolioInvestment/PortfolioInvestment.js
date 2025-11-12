import React from "react";
import portfolioData from "../../../../data/portfolio.json";

const PortfolioInvestment = ({ sectionRef, location }) => {
  const visibleHashes = [
    "#Investment",
    "#section4",
    "#section5",
    "#section6",
    "#section7",
    "#section8"
  ];

  return (
    <section
      id="Investment"
      ref={sectionRef}
      className={
        visibleHashes.includes(location.hash)
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
          {portfolioData.portfolioInvestment.map((item) => (
            <section id={item.hash} key={item.id}>
              <div className="investment-main-content">
                <div className="discription_block_investment">
                  <div className="card_containar_investment">
                    <div className="leftside_text_investment">
                      <img
                        loading="lazy"
                        className="image_containar_investment"
                        src={item.image}
                        alt={item.alt}
                      />
                      <div className="rightside_containar_investment">
                        <div className="name_label">
                          <img
                            loading="lazy"
                            src="/Maskteam.svg"
                            alt="Green Card"
                          />
                          <p className={`lable_p p${item.id}`}>
                            {item.title}
                          </p>
                        </div>
                        <p className="short-desc">{item.description}</p>
                        <div className="brand-logos">
                          {item.logos.map((logo, idx) => (
                            <img
                              key={idx}
                              loading="lazy"
                              src={logo.src}
                              alt={logo.alt}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioInvestment;
