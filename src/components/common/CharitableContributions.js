import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chart from "./Chart";
import charityData from "../../data/charity.json";
import otherCharities from "../../data/otherCharity.json";

const CharitableContributions = () => {
  const location = useLocation();

  useEffect(() => {
    // Adjust scroll for anchor links
    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 70);
    }, 0);
  }, [location]);

  return (
    <div className="charityble-contribution-wrapper">
      <div className="content-wrapper">
        <div className="company-values">
          <div className="values-title">
            <h2>Charitable Contributions</h2>
          </div>
          <div className="value-text">
            <p>
              Our team is committed to giving back to local charities to support
              a variety of communities. From building houses for low-income
              families to researching rare pediatric cancers, we each chose
              causes close to our hearts to fight for. Here are the
              organizations our team members donated to, with matched donations
              from PCG, in 2022.
            </p>
          </div>
        </div>

        <div className="chart-container">
          <div className="fosus-sec-wapper">
            <Chart />
          </div>
        </div>

        <div className="mobile-content">
          {charityData.map((data, i) => (
            <a href={data.webLink} target="_blank" rel="noreferrer" key={i}>
              <div className="charity-card">
                <div className="image-block">
                  <img src={data.logo} alt={data.title} />
                </div>
                <div className="content-block">
                  <p>{data.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="other-charity">
        <div className="title">
          <h3>Historically we’ve also contributed to:</h3>
        </div>
        <div className="box-container">
          {otherCharities.map((data, i) => (
            <div className="data-card" key={i}>
              {data.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharitableContributions;
