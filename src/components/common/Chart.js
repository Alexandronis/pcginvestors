import React, { useState } from "react";
import charityData from "../../data/charity.json";

const Chart = () => {
  const [onHover, setOnHover] = useState(9);
  const handleMouseEnter = index => {
    onHover === index + 1 ? setOnHover(0) : setOnHover(index + 1);
  };

  const handleMouseLeave = () => {
    setOnHover(0);
  };

  return (
    <div className="menu-section">
      <span className="middle-logo">
        <img src="/pcg-logo.png" alt="pcg Logo" loading="lazy" />
      </span>
      <span className="half-circle"></span>
      <div className="circular-wrapper">
        <ul>
          <li
            className="item-circle"
            style={{ transform: `rotateZ(calc((360deg / 8) * ${onHover})` }}
          >
            <span className="white-circle"></span>
          </li>
        </ul>
      </div>
      <div className="item-wrapper">
        <ul>
          {charityData.map((data, index) => (
            <li
              className="icon-circle"
              style={{
                transform: `rotateZ(calc((360deg / 7) * ${data.id + 1}))`,
              }}
              key={data.id}
            >
              <span
                className={
                  onHover === index + 1
                    ? `white-circle logo-circle${index} active`
                    : onHover === 0
                      ? `white-circle logo-circle${index}`
                      : `white-circle logo-circle${index} none-active`
                }
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className={
                    onHover === data.id + 1 ? "icon-none" : "icon-image"
                  }
                  src={data.logoRound}
                  alt={data.title}
                  loading="lazy"
                />
                <div
                  className={
                    onHover === data.id + 1
                      ? `card-active back${index}`
                      : "card-hide"
                  }
                >
                  <p>{data.description}</p>
                  <p className="right-align">
                    <a href={data.webLink} target="_blank" rel="noreferrer">
                      See More &gt;
                    </a>
                  </p>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chart;
