import React from "react";
// import cover1 from "./assests//images/Jason_Winship_Cover3x.png";
// import cover from "./assests/images/Jason-Winship.png";
// import profile1 from "./assests/images/jason_winship_activity3x.png";
// import "./style/team.css";
// import mailIcon from "./assests/icons/email_green.svg";
// import linkedIn from "./assests/icons/linkedin_green.svg";
// import arrowUp from "./assests/icons/arrowUp.svg";
// import "./style/team.css";

//THis component is hold

function Profile() {
  const [showResults, setShowResults] = React.useState(false);
  const onClose = () => setShowResults(true);

  const toggleResultsVisibility = () => {
    setShowResults(showResults ? false : true);
  };

  return (
    <>
      {showResults ? (
        <></>
      ) : (
        <div className="card_content_wrapper">
          <img src="/Jason-Winship.png" alt="" className="cover-img"/>
          <div className="card_content-col">
            <div className="image_cap">
              <div className="profile_discription">
                <img src="/jason_winship_activity3x.png" alt=""/>
                <p className="profile-text-01">
                  A lifelong athlete, Jason was a four year varsity football
                  letterman and an academic all American at Rice. These days, he
                  enjoys surfing, skiing and taking his dog for runs in the
                  beautiful outdoor places of Northern California that he, his
                  wife Annie, and their two children call home.
                </p>
              </div>
            </div>
            <div className="profile_header">
              <div className="header_tagline">
                <div className="subheding_text">
                  <h2>Jason Winship</h2>
                  <h5>Managing Director</h5>
                </div>
                <div className="header_icons">
                  <a>
                    <img src="/email_green.svg" alt=""/>
                  </a>
                  <a>
                    <img src="/linkedin_green.svg" alt=""  />
                  </a>
                  <img
                  className="arrow"
                    src="/arrowUp.svg"
                    alt=""
                    onClick={toggleResultsVisibility}
                  />
                </div>
              </div>
              <p className="main-desc">
                Jason Winship is a managing director at Partnership Capital Growth
                Investors. He also oversees the TBL Capital investment portfolio.
                His work includes deal sourcing and evaluation, transaction
                execution and portfolio monitoring. Jason has led numerous
                transactions in the natural and organic foods industry, and brings
                16 years of corporate finance, principal investment, and M&A
                experience to the PCGI team. Prior to joining Partnership Capital
                Growth Investors in 2010, Jason was the managing principal and
                co-founder of Sea Change Management, LLC. Launched in 2005, Sea
                Change is a venture capital firm that seeks to generate strong
                financial returns by investing in companies that meet consumer
                demand for seafood from environmentally preferable sources. Prior
                to his time with Sea Change, and its sister organization,
                California Environmental Associates, Jason was a Senior Associate
                with Westbury Equity Partners, a New York-based $150 million
                growth equity fund. In that capacity, he sourced, assessed, and
                executed early-stage private equity investments and supported
                portfolio companies with strategic and financial analysis. Prior
                to his tenure with Westbury, Jason sourced and executed
                international merger and acquisition opportunities for AT&T
                Wireless. Jason began his career as an investment banking analyst
                with Lehman Brothers, where he participated in a wide range of
                corporate financing and M&A transactions. Jason holds a Bachelor
                of Arts degree from Rice University
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
